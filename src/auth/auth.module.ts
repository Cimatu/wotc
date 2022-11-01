import { forwardRef, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from "@nestjs/jwt";
import UsersModule from 'src/users/users.module';
import { TokenModule } from './token/token.module';
import { CodeModule } from './recoveryCode/code.module';


@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    TokenModule,
    UsersModule,
    JwtModule,
    CodeModule
  ],
  exports: [
    AuthService,
    JwtModule
  ]
})
export class AuthModule { }