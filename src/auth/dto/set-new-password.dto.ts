import { ApiProperty } from "@nestjs/swagger";

export class SetNewPasswordDto {

    @ApiProperty({ example: 123456, description: 'New password' })
    recoveryCode: number;

    @ApiProperty({ example: '12345678', description: 'New password' })
    password1: string;

    @ApiProperty({ example: '12345678', description: 'Repeat password' })
    password2: string;
}
