import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length, } from "class-validator";

export class PayloadDto {
    email: string;

    @ApiProperty({ example: 'admin', description: 'User role' })
    @IsString({ message: 'Should be string' })
    role: string;
}
