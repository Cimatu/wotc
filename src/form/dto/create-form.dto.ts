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

    @ApiProperty({ example: true, description: "Have you worked for this employer?" })
    @IsBoolean({ message: 'Should be true or false' })
    optPreviousEmployer: boolean;

    @ApiProperty({ example: '12/12/2013', description: "If YES, enter last date of employment" })
    @IsString({ message: 'Should be string' })
    txtLastEmploymentDate: string;

    @ApiProperty({ example: '12.3', description: "Starting Wage/Hour" })
    @IsString({ message: 'Should be string' })
    txtStartWage: string

    @ApiProperty({ example: 'Architecture & Engineering', description: "Occupation" })
    @IsString({ message: 'Should be string' })
    ddlOccupation: string;
    
    @ApiProperty({ example: true, description: "Are you at least age 16, but under age 40?" })
    @IsBoolean({ message: 'Should be true or false' })
    optAgeUnder40: boolean;

    @ApiProperty({ example: 'Architecture & Engineering', description: "Please enter your date of birth" })
    @IsString({ message: 'Should be string' })
    txtBirthDate: string;

    @ApiProperty({ example: true, description: "Are you a Veteran of the U.S. Armed Forces?" })
    @IsBoolean({ message: 'Should be true or false' })
    optVeteran: boolean;

    @ApiProperty({ example: true, description: "" })
    @IsBoolean({ message: 'Should be true or false' })
    optVeteranReceivedSnap: boolean;

    @ApiProperty({ example: "Dima", description: "Primary Recipient" })
    @IsString({ message: 'Should be string' })
    txtVeteranSnapPrimaryRecipient: string; 

    @ApiProperty({ example: "Sacramento CA", description: "City and State" })
    @IsString({ message: 'Should be string' })
    txtVeteranSnapRecipientLocation: string;
    
    @ApiProperty({ example: true, description: "OR, are you a veteran entitled to compensation for a service-connected disability?" })
    @IsBoolean({ message: 'Should be true or false' })
    optVeteranDisability: boolean;

    @ApiProperty({ example: true, description: "If YES, were you discharged or released from active duty within the year before you were hired?" })
    @IsBoolean({ message: 'Should be true or false' })
    optVeteranDischarged: boolean;

    @ApiProperty({ example: true, description: "OR, were you unemployed for a combined period of at least 6 months (whether or not consecutive) during the year before you were hired?" })
    @IsBoolean({ message: 'Should be true or false' })
    optVeteranUnemployed: boolean;

    @ApiProperty({ example: true, description: "Are you a Veteran of the U.S. Armed Forces?" })
    @IsBoolean({ message: 'Should be true or false' })
    optSnap6Months: boolean;

    @ApiProperty({ example: true, description: "Are you a Veteran of the U.S. Armed Forces?" })
    @IsBoolean({ message: 'Should be true or false' })
    optSnap3Months: boolean;

    @ApiProperty({ example: "Sacramento CA", description: "City and State" })
    @IsString({ message: 'Should be string' })
    txtSnapPrimaryRecipient: string;

    @ApiProperty({ example: "Sacramento CA", description: "City and State" })
    @IsString({ message: 'Should be string' })
    txtSnapRecipientLocation: string;

    @ApiProperty({ example: true, description: "Are you a Veteran of the U.S. Armed Forces?" })
    @IsBoolean({ message: 'Should be true or false' })
    optAssignmentOrganization: boolean;

    @ApiProperty({ example: true, description: "Are you a Veteran of the U.S. Armed Forces?" })
    @IsBoolean({ message: 'Should be true or false' })
    optTanf18Months: boolean;

    @ApiProperty({ example: true, description: "Are you a Veteran of the U.S. Armed Forces?" })
    @IsBoolean({ message: 'Should be true or false' })
    optTanfAny18Months: boolean; //16

    @ApiProperty({ example: true, description: "Are you a Veteran of the U.S. Armed Forces?" })
    @IsBoolean({ message: 'Should be true or false' })
    optTanfNotEligible: boolean; //16

    @ApiProperty({ example: true, description: "Are you a Veteran of the U.S. Armed Forces?" })
    @IsBoolean({ message: 'Should be true or false' })
    optTanfAny9Months: boolean; //16

    @ApiProperty({ example: "Sacramento CA", description: "City and State" })
    @IsString({ message: 'Should be string' })
    txtTanfPrimaryRecipient: string; //16

    @ApiProperty({ example: "Sacramento CA", description: "City and State" })
    @IsString({ message: 'Should be string' })
    txtTanfRecipientLocation: string; //16

    @ApiProperty({ example: true, description: "Are you a Veteran of the U.S. Armed Forces?" })
    @IsBoolean({ message: 'Should be true or false' })
    optExFelon: boolean; //17

    @ApiProperty({ example: "Sacramento CA", description: "City and State" })
    @IsString({ message: 'Should be string' })
    txtConvictionDate: string; //17

    @ApiProperty({ example: "Sacramento CA", description: "City and State" })
    @IsString({ message: 'Should be string' })
    txtReleaseDate: string; //17

    @ApiProperty({ example: true, description: "Are you a Veteran of the U.S. Armed Forces?" })
    @IsBoolean({ message: 'Should be true or false' })
    optConvictionType: boolean;//17

    @ApiProperty({ example: true, description: "Are you a Veteran of the U.S. Armed Forces?" })
    @IsBoolean({ message: 'Should be true or false' })
    optInRuralRenewalCounty: boolean; //18

    @ApiProperty({ example: true, description: "Are you a Veteran of the U.S. Armed Forces?" })
    @IsBoolean({ message: 'Should be true or false' })
    optEmpowermentZone: boolean; //19

    @ApiProperty({ example: true, description: "Are you a Veteran of the U.S. Armed Forces?" })
    @IsBoolean({ message: 'Should be true or false' })
    optReceivedSSI: boolean; //20

    @ApiProperty({ example: true, description: "Are you a Veteran of the U.S. Armed Forces?" })
    @IsBoolean({ message: 'Should be true or false' })
    optUnemployedVeteran6Months: boolean; //21

    @ApiProperty({ example: true, description: "Are you a Veteran of the U.S. Armed Forces?" })
    @IsBoolean({ message: 'Should be true or false' })
    optUnemployedVeteran4Weeks: boolean; //22

    @ApiProperty({ example: true, description: "Are you a Veteran of the U.S. Armed Forces?" })
    @IsBoolean({ message: 'Should be true or false' })
    optLTUrecipient27weeks: boolean; //23

    @ApiProperty({ example: "Sacramento CA", description: "City and State" })
    @IsString({ message: 'Should be string' })
    txtLtuBenefitsState: string; //23

    @ApiProperty({ example: "Sacramento CA", description: "City and State" })
    @IsString({ message: 'Should be string' })
    txtSafStartDate: string; //23

    @ApiProperty({ example: "Sacramento CA", description: "City and State" })
    @IsString({ message: 'Should be string' })
    txtEligibilitySources: string; //last field
}
