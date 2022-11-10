import { Body, Controller, Delete, Get, Query, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import Company from './company.entity';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';

@ApiTags('Companies')
@Controller('companies')
export class CompanyController {

    constructor(private companyService: CompanyService) { }

    @ApiOperation({ summary: 'Company creation' })
    @ApiResponse({ status: 200, type: Company })
    @Post('create')
    create(@Body() dto: CreateCompanyDto) {
        return this.companyService.createCompany(dto);
    }

    @ApiOperation({ summary: 'Company update' })
    @ApiResponse({ status: 200, type: Company })
    @Post('update')
    update(@Query('id') id: number, @Body() dto: CreateCompanyDto) {
        return this.companyService.updateCompanyById(id, dto)
    }

    @ApiOperation({ summary: `Get company by id` })
    @ApiResponse({ status: 200, type: Company })
    @Get('get_by_id')
    getById(@Query('id') id: number) {
        return this.companyService.getCompanyById(id);
    }

    // @ApiOperation({ summary: `Get user by unique username` })
    // @ApiResponse({ status: 200, type: User })
    // @Get('get_by_username/:username')
    // getUserByUsername(@Param('username') username: string) {
    //     return this.usersService.getUserByUsername(username);
    // }

    // @ApiOperation({ summary: `Get user by unique username` })
    // @ApiResponse({ status: 200 })
    // @Delete('delete_by_id/:user_id')
    // deleteUserById(@Param('user_id') user_id: number) {
    //     return this.usersService.deteteUserById(user_id);
    // }
}
