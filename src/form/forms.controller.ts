import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { FormsService } from './forms.service';



@ApiTags('Forms')
@Controller('forms')
export class FormController {

    constructor(private formsService: FormsService) { }

    @ApiOperation({ summary: 'Sign up' })
    @Post('fill_the_form')
    signUp() {
        return this.formsService.fillTheForm()
    }

}
