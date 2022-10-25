import { ApiProperty } from "@nestjs/swagger";

export class SignOutDto{
    @ApiProperty({example: 'lieurhjpervhoiuehjf09q438fq-f98hdq-394f', description: 'Refresh token'})
    refreshToken: string;
}