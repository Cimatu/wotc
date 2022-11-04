import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNumber, IsString } from "class-validator";

export class SetNewPasswordDto {
    @ApiProperty({ example: '1', description: 'Unique user id' })
    // @IsString({ message: 'Should be string' })
    // @IsEmail({}, { message: "Incorrect email" })
    userId: number;

    @ApiProperty({ example: '12345678', description: 'New password' })
    @IsString({ message: 'Should be string' })
    password1: string;

    @ApiProperty({ example: '12345678', description: 'Repeat password' })
    @IsString({ message: 'Should be string' })
    password2: string;
}
