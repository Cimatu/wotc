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
    @Column()
    txtFEIN: string;

    @ApiProperty({ example: '12-1234567', description: "Employer's Name" })
    @Column()
    txtErName: string;

    @ApiProperty({ example: '(123) 123-1234', description: "Telephone" })
    @Column()
    txtErPhone: string;

    @ApiProperty({ example: 'AVLABARI 8', description: "Street Address" })
    @Column()
    txtErStreet: string;

    @ApiProperty({ example: 'Sacramento', description: "City or Town" })
    @Column()
    txtErCity: string;

    @ApiProperty({ example: 'CA', description: "State" })
    @Column()
    txtErState: string;

    @ApiProperty({ example: '23452', description: "ZIP Code" })
    @Column()
    txtErZip: string;

    @ApiProperty({ example: 'Dimasik Gonapivasik', description: "Contact Name" })
    @Column()
    txtContactName: string;

    @ApiProperty({ example: '(916) 221-1341', description: "Telephone" })
    @Column()
    txtContactPhone: string;

    @ApiProperty({ example: '704 NATOMA ST', description: "Street Address" })
    @Column()
    txtContactStreet: string;

    @ApiProperty({ example: 'FOLSOM', description: "City or Town" })
    @Column()
    txtContactCity: string;

    @ApiProperty({ example: 'CA', description: "State" })
    @Column()
    txtContactState: string;

    @ApiProperty({ example: '95630', description: "ZIP Code" })
    @Column()
    txtContactZip: string;
    
    @ApiProperty({ example: '4', description: "?????????" })
    @Column()
    ddlGroupNumber: string;

    @ApiProperty({ example: '10/01/2022', description: "Gave Information" })
    @Column()
    txtInfoDate: string;

    @ApiProperty({ example: '10/01/2022', description: "Was offered job" })
    @Column()
    txtOfferDate: string;

    @ApiProperty({ example: '10/01/2022', description: "Was hired" })
    @Column()
    txtHireDate: string;

    @ApiProperty({ example: '10/29/2022', description: "Started job" })
    @Column()
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

    @Column()
    optPreviousEmployer: string; //8
    @Column()
    txtLastEmploymentDate: string; //8

    @Column()
    txtStartWage: string; //10
    @Column()
    ddlOccupation: string; //11optPreviousEmployer_0
    @Column()
    optAgeUnder40: string; //12
    @Column()
    txtBirthDate: string; //12
    @Column()
    optVeteran: string; //13
    @Column()
    optVeteranReceivedSnap: string; //13
    @Column()
    txtVeteranSnapPrimaryRecipient: string; // 13
    @Column()
    txtVeteranSnapRecipientLocation: string; // 13
    @Column()
    optVeteranDisability: string; //13
    @Column()
    optVeteranDischarged: string; //13
    @Column()
    optVeteranUnemployed: string; //13
    @Column()
    optSnap6Months: string; //14
    @Column()
    optSnap3Months: string; //14
    @Column()
    txtSnapPrimaryRecipient: string; //14
    @Column()
    txtSnapRecipientLocation: string; //14
    @Column()
    optAssignmentOrganization: string; //15

    @Column()
    optTanf18Months: string; //16
    @Column()
    optTanfAny18Months: string; //16
    @Column()
    optTanfNotEligible: string; //16
    @Column()
    optTanfAny9Months: string; //16
    @Column()
    txtTanfPrimaryRecipient: string; //16
    @Column()
    txtTanfRecipientLocation: string; //16

    @Column()
    optExFelon: string; //17
    @Column()
    txtConvictionDate: string; //17
    @Column()
    txtReleaseDate: string; //17
    @Column()
    optConvictionType: string;//17

    @Column()
    optInRuralRenewalCounty: string; //18
    @Column()
    optEmpowermentZone: string; //19
    @Column()
    optReceivedSSI: string; //20
    @Column()
    optUnemployedVeteran6Months: string; //21
    @Column()
    optUnemployedVeteran4Weeks: string; //22

    @Column()
    optLTUrecipient27weeks: string; //23
    @Column()
    txtLtuBenefitsState: string; //23
    @Column()
    txtSafStartDate: string; //23

    @Column()
    txtEligibilitySources: string; //last field
}

export default Form