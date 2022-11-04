import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNumber, IsString } from "class-validator";

export class VerifyCodeDto {

    @ApiProperty({ example: 123456, description: 'New password' })
    @IsNumber({}, { message: 'Should be number' })
    code: number;

    @ApiProperty({ example: 'dimasikpodpivasik@gmail.com', description: 'Unique username' })
    @IsString({ message: 'Should be string' })
    @IsEmail({}, { message: "Incorrect email" })
    email: string;

}
