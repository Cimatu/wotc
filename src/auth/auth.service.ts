import { HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { UsersService } from "src/users/users.service";
import { TokenService } from "./token/token.service";
import * as bcrypt from 'bcryptjs'
import * as nodemailer from 'nodemailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { SignInDto } from "./dto/sign-in.dto";
import { CodeModule } from "./recoveryCode/code.module";
import { RecoveryService } from "./recoveryCode/code.service";
import { SetNewPasswordDto } from "./dto/set-new-password.dto";
import { VerifyCodeDto } from "./dto/verify-code.dto";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER || 'pavel.gurinovich.vit@gmail.com',
    pass: process.env.SMTP_PASSWORD || 'pbiktgrovxvqnums'
  }
} as SMTPTransport.Options)

@Injectable()
export class AuthService {
  constructor(
    private tokenService: TokenService,
    private userService: UsersService,
    private recoveryService: RecoveryService
  ) { }

  async signUp(dto: CreateUserDto) {
    const { email, password } = dto
    const candidate = await this.userService.getUserByEmail(email);
    if (candidate) {
      throw new HttpException('User with such email already exists', HttpStatus.BAD_REQUEST);
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await this.userService.createUser({ ...dto, password: hashPassword });
    const tokens = await this.tokenService.generateTokens(user);
    await this.tokenService.saveToken(user.id, tokens.refreshToken);
    return {
      ...tokens,
      userId: user.id
    };
  }

  async signIn(dto: SignInDto) {
    const user = await this.validateUser(dto);
    const tokens = await this.tokenService.generateTokens(user);
    await this.tokenService.saveToken(user.id, tokens.refreshToken);
    return {
      ...tokens,
      userId: user.id,
      role: user.role
    };
  }

  async signOut(refreshToken: string) {
    return await this.tokenService.deleteTokenByUser(refreshToken)
  }

  private async validateUser(dto: CreateUserDto) {
    const { email, password } = dto;
    const user = await this.userService.getUserByEmail(email);
    const passwordEquals = await bcrypt.compare(password, user.password);
    if (user && passwordEquals) {
      return user;
    }
    throw new UnauthorizedException({ message: 'Incorrect email or passwrod' })
  }

  async restorePassword(email: string) {
    const user = await this.userService.getUserByEmail(email);
    if (!user) {
      throw new HttpException('User with such email not found', HttpStatus.BAD_REQUEST);
    }
    const code = await this.recoveryService.generateCode(user.id)

    return await this.sendRecoveryEmail(email, code)
  }

  async sendRecoveryEmail(to: string, code: number) {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject: 'Password recovery',
      text: '',
      html:
        `
          <div>
              <h1>Hello, ${to}! This is your recovery code.</h1>
              <h1>${code}</h1>
          </div>
          `
    })
  }

  async verifyCode(dto: VerifyCodeDto) {
    const { email, code } = dto;
    const user = await this.userService.getUserByEmail(email);
    if (!user) {
      throw new HttpException('User with such email not found', HttpStatus.BAD_REQUEST);
    }
    return await this.recoveryService.validateCode(user.id, code);
  }

  async setNewPassword(dto: SetNewPasswordDto) {
    const { email, password1, password2 } = dto;

    const user = await this.userService.getUserByEmail(email);
    if (!user) {
      throw new HttpException('User with such email not found', HttpStatus.BAD_REQUEST);
    }

    if (password1 !== password2) {
      throw new HttpException('Passwords do not match', HttpStatus.BAD_REQUEST);
    }

    const hashPassword = await bcrypt.hash(password1, 5);
    return await this.userService.updatePassword(user.email, hashPassword)
  }
}
