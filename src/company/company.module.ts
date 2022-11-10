import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { CompanyController } from './company.controller';
import Company from './company.entity';
import { CompanyService } from './company.service';


@Module({
  controllers: [CompanyController],
  providers: [CompanyService],
  imports: [
    TypeOrmModule.forFeature([Company]),
  ],
  exports: [

  ]
})
export class CompanyModule { }