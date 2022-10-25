import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length, } from "class-validator";

export class CreateUserDto {
    @ApiProperty({ example: 'dimasikpodpivasik@gmail.com', description: 'Unique username' })
    @IsString({ message: 'Should be string' })
    @IsEmail({}, { message: "Incorrect email" })
    readonly email: string;

    @ApiProperty({ example: '12345678', description: 'Password' })
    @IsString({ message: 'Should be string' })
    @Length(4, 16, {
        message: 'Should be not less than 4 and not more than 16'
    })
    readonly password: string;

    @IsString({ message: 'Should be string' })
    @ApiProperty({ example: 'admin', description: 'User role, default: manager' })
    readonly role?: string;
}
