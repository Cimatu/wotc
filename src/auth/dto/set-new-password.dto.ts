import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNumber, IsString } from "class-validator";

export class SetNewPasswordDto {
    @ApiProperty({ example: 'dimasikpodpivasik@gmail.com', description: 'Unique username' })
    @IsString({ message: 'Should be string' })
    @IsEmail({}, { message: "Incorrect email" })
    email: string;

    @ApiProperty({ example: '12345678', description: 'New password' })
    @IsString({ message: 'Should be string' })
    password1: string;

    @ApiProperty({ example: '12345678', description: 'Repeat password' })
    @IsString({ message: 'Should be string' })
    password2: string;
}
