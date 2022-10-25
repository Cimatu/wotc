import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from "./auth.service";
import { SignDto } from './dto/sign-in.dto';
// import { RecoveryDto, SetNewPasswordDto } from './dto/recovery.dto';


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
    signIn(@Body() dto: SignDto) {
        return this.authService.signIn(dto);
    }

    // @ApiOperation({ summary: 'Sign out for admin' })
    // @Post('signout')
    // signOut(@Body() dto: SignOutDto) {
    //     return this.authService.signOut(dto.refreshToken)
    // }

    // @ApiOperation({ summary: 'Sign up for admin' })
    // @Post('restore_password')
    // restorePassword(@Body() dto: RecoveryDto) {
    //     return this.authService.restorePassword(dto.email, dto.link)
    // }

    // @ApiOperation({ summary: 'Password recovery' })
    // @Post('set_new_password')
    // setNewPassword(
    //     @Query('id') id: number,
    //     @Query('token') token: string,
    //     @Body() dto: SetNewPasswordDto
    // ) {
    //     return this.authService.setNewPassword(id, token, dto)
    // }
}
