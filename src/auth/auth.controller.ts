import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from "./auth.service";
import { RecoveryDto } from './dto/password-recovery.dto';
import { SetNewPasswordDto } from './dto/set-new-password.dto';
import { SignInDto } from './dto/sign-in.dto';
import { SignOutDto } from './dto/sign-out.dto';
import { VerifyCodeDto } from './dto/verify-code.dto';


@ApiTags('Authorization')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @ApiOperation({ summary: 'Sign up' })
    @Post('signup')
    signUp(@Body() dto: CreateUserDto) {
        return this.authService.signUp(dto)
    }

    @ApiOperation({ summary: 'Sign in' })
    @Post('signin')
    signIn(@Body() dto: SignInDto) {
        return this.authService.signIn(dto);
    }

    @ApiOperation({ summary: 'Sign out' })
    @Post('signout')
    signOut(@Body() dto: SignOutDto) {
        return this.authService.signOut(dto.refreshToken)
    }

    @ApiOperation({ summary: 'Restore password' })
    @Post('restore_password')
    restorePassword(@Body() dto: RecoveryDto) {
        return this.authService.restorePassword(dto.email)
    }

    @ApiOperation({ summary: 'Verify code' })
    @Post('verify_code')
    verifyCode(@Body() dto: VerifyCodeDto) {
        return this.authService.verifyCode(dto)
    }

    
    @ApiOperation({ summary: 'Set new password' })
    @Post('set_new_password')
    setNewPassword(
        @Query('id') id: number,
        @Body() dto: SetNewPasswordDto
    ) {
        return this.authService.setNewPassword(id, dto)
    }
}
