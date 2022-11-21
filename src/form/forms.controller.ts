import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { CreateFormDto } from './dto/create-form.dto';
import Form from './forms.entity';
import { FormsService } from './forms.service';



@ApiTags('Forms')
@Controller('forms')
export class FormController {

    constructor(private formsService: FormsService) { }

    @ApiOperation({ summary: 'Fill the form' })
    @Post('fill_the_form')
    signUp() {
        return this.formsService.fillTheForm()
    }

    @ApiOperation({ summary: 'Get companies with pagination' })
    @ApiResponse({ status: 200, type: [Form] })
    @Get()
    getPaginateDetails(
        @Query('take') take: number = 10,
        @Query('skip') skip: number = 0
    ) {
        take = take > 20 ? 20 : take;
        return this.formsService.getFormWithPagination(take, skip);
    }

    getCSV(){
        return this.formsService.getCSV();
    }

}
