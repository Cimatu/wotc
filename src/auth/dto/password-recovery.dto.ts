import { ApiProperty } from "@nestjs/swagger";

export class RecoveryDto {
    @ApiProperty({ example: 'destroyer3000@gmail.com', description: 'Unique email' })
    email: string;

    @ApiProperty({ example: 'https://vironit.timesummary.com/report/', description: 'Password recovery link' })
    link?: string;
}
