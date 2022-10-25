import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import Token from './auth/token/token.entity';
import { TokenModule } from './auth/token/token.module';
import { User } from './users/users.entity';
import UsersModule from './users/users.module';

@Module({
  providers: [],
  controllers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [User, Token],
      synchronize: true,
      ssl: { rejectUnauthorized: false },
    }),
    UsersModule,
    AuthModule,
    TokenModule
  ],
})
export class AppModule { }
