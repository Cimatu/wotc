import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import UsersModule from 'src/users/users.module';
import { FormController } from './forms.controller';
import Form from './forms.entity';
import { FormsService } from './forms.service';


@Module({
  controllers: [FormController],
  providers: [FormsService],
  imports: [
    TypeOrmModule.forFeature([Form]),
  ],
  exports: [

  ]
})
export class FormModule { }