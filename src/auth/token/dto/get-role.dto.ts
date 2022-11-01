import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length, } from "class-validator";

export class GetRoleByTokenDto {
    @ApiProperty({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhc2hhZ3VyaW5vdmljaEBnbWFpbC5jb20iLCJpZCI6MSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjY3Mjg4ODc2LCJleHAiOjE2Njk4ODA4NzZ9.qR2q5iiRT897OFF326-qducRbb2-ioxSx8JZQlcOMp8', description: 'User token' })
    @IsString({ message: 'Should be string' })
    readonly token: string;
}
