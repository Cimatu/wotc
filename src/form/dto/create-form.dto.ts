import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsEmail, IsString, Length, } from "class-validator";

export class CreateFormDto {
    @ApiProperty({ example: 'Pavel', description: 'First name' })
    @IsString({ message: 'Should be string' })
    txtFirstName: string;

    @ApiProperty({ example: 'Hurin', description: 'Last name' })
    @IsString({ message: 'Should be string' })
    txtLastName: string;

    @ApiProperty({ example: '123-12-1234', description: 'Social security no.' })
    @IsString({ message: 'Should be string' })
    txtSSN: string;

    @ApiProperty({ example: 'Avlabari 8', description: 'Street Address' })
    txtStreet: string;

    @ApiProperty({ example: 'Avlabari 8', description: 'City or Town' })
    @IsString({ message: 'Should be string' })
    txtCity: string;

    @ApiProperty({ example: 'Homel voblast', description: 'State' })
    @IsString({ message: 'Should be string' })
    txtState: string;

    @ApiProperty({ example: '12345', description: 'ZIP Code' })
    @IsString({ message: 'Should be string' })
    txtZip: string;

    @ApiProperty({ example: '12-1234567', description: 'FIEN' })
    @IsString({ message: 'Should be string' })
    txtFEIN: string;

    @ApiProperty({ example: '12-1234567', description: "Employer's Name" })
    @IsString({ message: 'Should be string' })
    txtErName: string;

    @ApiProperty({ example: '(123) 123-1234', description: "Telephone" })
    @IsString({ message: 'Should be string' })
    txtErPhone: string;

    @ApiProperty({ example: 'AVLABARI 8', description: "Street Address" })
    @IsString({ message: 'Should be string' })
    txtErStreet: string;

    @ApiProperty({ example: 'Sacramento', description: "City or Town" })
    @IsString({ message: 'Should be string' })
    txtErCity: string;

    @ApiProperty({ example: 'CA', description: "State" })
    @IsString({ message: 'Should be string' })
    txtErState: string;

    @ApiProperty({ example: '23452', description: "ZIP Code" })
    @IsString({ message: 'Should be string' })
    txtErZip: string;

    @ApiProperty({ example: 'Dimasik Gonapivasik', description: "Contact Name" })
    @IsString({ message: 'Should be string' })
    txtContactName: string;

    @ApiProperty({ example: '(916) 221-1341', description: "Telephone" })
    @IsString({ message: 'Should be string' })
    txtContactPhone: string;

    @ApiProperty({ example: '704 NATOMA ST', description: "Street Address" })
    @IsString({ message: 'Should be string' })
    txtContactStreet: string;

    @ApiProperty({ example: 'FOLSOM', description: "City or Town" })
    @IsString({ message: 'Should be string' })
    txtContactCity: string;

    @ApiProperty({ example: 'CA', description: "State" })
    @IsString({ message: 'Should be string' })
    txtContactState: string;

    @ApiProperty({ example: '95630', description: "ZIP Code" })
    @IsString({ message: 'Should be string' })
    txtContactZip: string;

    @ApiProperty({ example: '4', description: "?????????" })
    @IsString({ message: 'Should be string' })
    ddlGroupNumber: string;

    @ApiProperty({ example: '10/01/2022', description: "Gave Information" })
    @IsString({ message: 'Should be string' })
    txtInfoDate: string;

    @ApiProperty({ example: '10/01/2022', description: "Was offered job" })
    @IsString({ message: 'Should be string' })
    txtOfferDate: string;
    
    @ApiProperty({ example: '10/29/2022', description: "Was hired" })
    @IsString({ message: 'Should be string' })
    txtHireDate: string;

    @ApiProperty({ example: '10/01/2022', description: "Started job" })
    @IsString({ message: 'Should be string' })
    txtStartDate: string;

    @ApiProperty({ example: true, description: "Checkbox 1" })
    @IsBoolean({ message: 'Should be true or false' })
    chkItem1: boolean;

    @ApiProperty({ example: true, description: "Checkbox 2" })
    @IsBoolean({ message: 'Should be true or false' })
    chkItem2: boolean;

    @ApiProperty({ example: true, description: "Checkbox 3" })
    @IsBoolean({ message: 'Should be true or false' })
    chkItem3: boolean;

    @ApiProperty({ example: true, description: "Checkbox 4" })
    @IsBoolean({ message: 'Should be true or false' })
    chkItem4: boolean;

    @ApiProperty({ example: true, description: "Checkbox 5" })
    @IsBoolean({ message: 'Should be true or false' })
    chkItem5: boolean;

    @ApiProperty({ example: true, description: "Checkbox 6" })
    @IsBoolean({ message: 'Should be true or false' })
    chkItem6: boolean;

    @ApiProperty({ example: true, description: "Checkbox 7" })
    @IsBoolean({ message: 'Should be true or false' })
    chkItem7: boolean;
}
