import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNumber, IsString, Length, } from "class-validator";

export class CreateCompanyDto {
    @ApiProperty({ example: "VironIT", description: 'Company name' })
    @IsString()
    companyName: string;

    @ApiProperty({ example: "12-1234567", description: 'FIEN' })
    @IsString()
    fein: string;

    @ApiProperty({ example: "CA", description: 'State' })
    @IsString()
    state: string;

    @ApiProperty({ example: 123456, description: 'ZIP' })
    @IsString()
    zip: string;

    @ApiProperty({ example: "Moskovskaya", description: 'Street' })
    @IsString()
    street: string;

    @ApiProperty({ example: "Dima", description: 'Contact name' })
    @IsString()
    contactName: string;

    @ApiProperty({ example: "(29)123-1234", description: 'Phone' })
    @IsString()
    phone: string;
}

