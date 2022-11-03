import { ApiProperty } from "@nestjs/swagger";

export class RecoveryDto {
    @ApiProperty({ example: 'destroyer3000@gmail.com', description: 'Unique email' })
    email: string;
}
