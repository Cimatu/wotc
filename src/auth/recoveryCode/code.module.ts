import { Module } from '@nestjs/common';
import { JwtModule } from "@nestjs/jwt";
import { TypeOrmModule } from '@nestjs/typeorm';
import Token from './code.entity';
import { RecoveryService } from './code.service';
import { RecoveryController } from './code.controller';
import { User } from 'src/users/users.entity';

@Module({
  controllers: [RecoveryController],
  providers: [RecoveryService],
  imports: [
    TypeOrmModule.forFeature([Token, User]),
    JwtModule.register({
      secret: process.env.PRIVATE_KEY || 'SECRET',
      signOptions: {
        expiresIn: '5m'
      }
    })
  ],
  exports: [
    JwtModule,
    RecoveryService
  ]
})
export class CodeModule { }