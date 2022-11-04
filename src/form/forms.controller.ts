import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { CreateFormDto } from './dto/create-form.dto';
import { FormsService } from './forms.service';



@ApiTags('Forms')
@Controller('forms')
export class FormController {

    constructor(private formsService: FormsService) { }

    @ApiOperation({ summary: 'Fill the form' })
    @Post('fill_the_form')
    signUp(@Body() dto: CreateFormDto) {
        return this.formsService.fillTheForm(dto)
    }
}
