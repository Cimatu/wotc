import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity('forms')
class Form {
    @ApiProperty({ example: 1, description: 'Unique identificator' })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ example: 'Pavel', description: 'First name' })
    @Column()
    txtFirstName: string;

    @ApiProperty({ example: 'Hurin', description: 'Last name' })
    @Column()
    txtLastName: string;

    @ApiProperty({ example: '123-12-1234', description: 'Social security no.' })
    @Column()
    txtSSN: string;

    @ApiProperty({ example: 'Avlabari 8', description: 'Street Address' })
    @Column()
    txtStreet: string;

    @ApiProperty({ example: 'Avlabari 8', description: 'City or Town' })
    @Column()
    txtCity: string;

    @ApiProperty({ example: 'Homel voblast', description: 'State' })
    @Column()
    txtState: string;

    @ApiProperty({ example: '12345', description: 'ZIP Code' })
    @Column()
    txtZip: string;

    //employeer
    @ApiProperty({ example: '12-1234567', description: 'FIEN' })
    @Column({ nullable: false })
    txtFEIN: string;

    @ApiProperty({ example: '12-1234567', description: "Employer's Name" })
    @Column({ nullable: false })
    txtErName: string;

    @ApiProperty({ example: '(123) 123-1234', description: "Telephone" })
    @Column({ nullable: false })
    txtErPhone: string;

    @ApiProperty({ example: 'AVLABARI 8', description: "Street Address" })
    @Column({ nullable: false })
    txtErStreet: string;

    @ApiProperty({ example: 'Sacramento', description: "City or Town" })
    @Column({ nullable: false })
    txtErCity: string;

    @ApiProperty({ example: 'CA', description: "State" })
    @Column({ nullable: false })
    txtErState: string;

    @ApiProperty({ example: '23452', description: "ZIP Code" })
    @Column({ nullable: false })
    txtErZip: string;

    @ApiProperty({ example: 'Dimasik Gonapivasik', description: "Contact Name" })
    @Column({ default: '' })
    txtContactName: string;

    @ApiProperty({ example: '(916) 221-1341', description: "Telephone" })
    @Column({ default: '' })
    txtContactPhone: string;

    @ApiProperty({ example: '704 NATOMA ST', description: "Street Address" })
    @Column({ default: '' })
    txtContactStreet: string;

    @ApiProperty({ example: 'FOLSOM', description: "City or Town" })
    @Column({ default: '' })
    txtContactCity: string;

    @ApiProperty({ example: 'CA', description: "State" })
    @Column({ default: '' })
    txtContactState: string;

    @ApiProperty({ example: '95630', description: "ZIP Code" })
    @Column({ default: '' })
    txtContactZip: string;

    @ApiProperty({ example: '4', description: "?????????" })
    @Column({ default: '' })
    ddlGroupNumber: string;

    @ApiProperty({ example: '10/01/2022', description: "Gave Information" })
    @Column({ nullable: false })
    txtInfoDate: string;

    @ApiProperty({ example: '10/01/2022', description: "Was offered job" })
    @Column({ nullable: false })
    txtOfferDate: string;

    @ApiProperty({ example: '10/01/2022', description: "Was hired" })
    @Column({ nullable: false })
    txtHireDate: string;

    @ApiProperty({ example: '10/29/2022', description: "Started job" })
    @Column({ nullable: false })
    txtStartDate: string;

    @ApiProperty({ example: true, description: "Checkbox 1" })
    @Column()
    chkItem1: boolean;

    @ApiProperty({ example: true, description: "Checkbox 2" })
    @Column()
    chkItem2: boolean;

    @ApiProperty({ example: true, description: "Checkbox 3" })
    @Column()
    chkItem3: boolean;

    @ApiProperty({ example: true, description: "Checkbox 4" })
    @Column()
    chkItem4: boolean;

    @ApiProperty({ example: true, description: "Checkbox 5" })
    @Column()
    chkItem5: boolean;

    @ApiProperty({ example: true, description: "Checkbox 6" })
    @Column()
    chkItem6: boolean;

    @ApiProperty({ example: true, description: "Checkbox 7" })
    @Column()
    ChkItem7: boolean;

    @ApiProperty({ example: true, description: "Have you worked for this employer?" })
    @Column()
    optPreviousEmployer: boolean; //8

    @ApiProperty({ example: '12/12/2013', description: "If YES, enter last date of employment" })
    @Column()
    txtLastEmploymentDate: string; //8

    @ApiProperty({ example: '12.3', description: "Starting Wage/Hour" })
    @Column()
    txtStartWage: string; //10

    @ApiProperty({ example: 'Architecture & Engineering', description: "Occupation" })
    @Column()
    ddlOccupation: string; 

    @ApiProperty({ example: true, description: "Are you at least age 16, but under age 40?" })
    @Column()
    optAgeUnder40: boolean; //12

    @ApiProperty({ example: 'Architecture & Engineering', description: "Please enter your date of birth" })
    @Column()
    txtBirthDate: string;

    @ApiProperty({ example: true, description: "Are you a Veteran of the U.S. Armed Forces?" })
    @Column()
    optVeteran: boolean; 

    @ApiProperty({ example: true, description: "" })
    @Column()
    optVeteranReceivedSnap: boolean;

    @ApiProperty({ example: "Dima", description: "Primary Recipient" })
    @Column()
    txtVeteranSnapPrimaryRecipient: string; // 13

    @ApiProperty({ example: "Sacramento CA", description: "City and State" })
    @Column()
    txtVeteranSnapRecipientLocation: string; // 13
    
    @ApiProperty({ example: true, description: "Are you a Veteran of the U.S. Armed Forces?" })
    @Column()
    optVeteranDisability: boolean; //13

    @ApiProperty({ example: true, description: "Are you a Veteran of the U.S. Armed Forces?" })
    @Column()
    optVeteranDischarged: boolean; //13

    @ApiProperty({ example: true, description: "Are you a Veteran of the U.S. Armed Forces?" })
    @Column()
    optVeteranUnemployed: boolean; //13

    @ApiProperty({ example: true, description: "Are you a Veteran of the U.S. Armed Forces?" })
    @Column()
    optSnap6Months: boolean; //14

    @ApiProperty({ example: true, description: "Are you a Veteran of the U.S. Armed Forces?" })
    @Column()
    optSnap3Months: boolean; //14

    @ApiProperty({ example: "Sacramento CA", description: "City and State" })
    @Column()
    txtSnapPrimaryRecipient: string; //14

    @ApiProperty({ example: "Sacramento CA", description: "City and State" })
    @Column()
    txtSnapRecipientLocation: string; //14

    @ApiProperty({ example: true, description: "Are you a Veteran of the U.S. Armed Forces?" })
    @Column()
    optAssignmentOrganization: boolean; //15

    @ApiProperty({ example: true, description: "Are you a Veteran of the U.S. Armed Forces?" })
    @Column()
    optTanf18Months: string; //16

    @ApiProperty({ example: true, description: "Are you a Veteran of the U.S. Armed Forces?" })
    @Column()
    optTanfAny18Months: string; //16

    @ApiProperty({ example: true, description: "Are you a Veteran of the U.S. Armed Forces?" })
    @Column()
    optTanfNotEligible: string; //16

    @ApiProperty({ example: true, description: "Are you a Veteran of the U.S. Armed Forces?" })
    @Column()
    optTanfAny9Months: string; //16

    @ApiProperty({ example: "Sacramento CA", description: "City and State" })
    @Column()
    txtTanfPrimaryRecipient: string; //16

    @ApiProperty({ example: "Sacramento CA", description: "City and State" })
    @Column()
    txtTanfRecipientLocation: string; //16

    @ApiProperty({ example: true, description: "Are you a Veteran of the U.S. Armed Forces?" })
    @Column()
    optExFelon: string; //17

    @ApiProperty({ example: "Sacramento CA", description: "City and State" })
    @Column()
    txtConvictionDate: string; //17

    @ApiProperty({ example: "Sacramento CA", description: "City and State" })
    @Column()
    txtReleaseDate: string; //17

    @ApiProperty({ example: true, description: "Are you a Veteran of the U.S. Armed Forces?" })
    @Column()
    optConvictionType: string;//17

    @ApiProperty({ example: true, description: "Are you a Veteran of the U.S. Armed Forces?" })
    @Column()
    optInRuralRenewalCounty: string; //18

    @ApiProperty({ example: true, description: "Are you a Veteran of the U.S. Armed Forces?" })
    @Column()
    optEmpowermentZone: string; //19

    @ApiProperty({ example: true, description: "Are you a Veteran of the U.S. Armed Forces?" })
    @Column()
    optReceivedSSI: string; //20

    @ApiProperty({ example: true, description: "Are you a Veteran of the U.S. Armed Forces?" })
    @Column()
    optUnemployedVeteran6Months: string; //21

    @ApiProperty({ example: true, description: "Are you a Veteran of the U.S. Armed Forces?" })
    @Column()
    optUnemployedVeteran4Weeks: string; //22

    @ApiProperty({ example: true, description: "Are you a Veteran of the U.S. Armed Forces?" })
    @Column()
    optLTUrecipient27weeks: string; //23

    @ApiProperty({ example: "Sacramento CA", description: "City and State" })
    @Column()
    txtLtuBenefitsState: string; //23

    @ApiProperty({ example: "Sacramento CA", description: "City and State" })
    @Column()
    txtSafStartDate: string; //23

    @ApiProperty({ example: "Sacramento CA", description: "City and State" })
    @Column()
    txtEligibilitySources: string; //last field
}

export default Form