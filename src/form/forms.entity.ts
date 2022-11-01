import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity('users')
export class User {
    @ApiProperty({ example: 1, description: 'Unique identificator' })
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    txtFirstName: string;
    
    @Column()
    txtLastName: string;

    @Column()
    txtSSN: string;
    @Column()
    txtStreet: string;
    @Column()
    txtCity: string;
    @Column()
    txtState: string;
    @Column()
    txtZip: string;

    //employeer
    @Column()
    txtFEIN: string;
    @Column()
    txtErName: string;
    @Column()
    txtErPhone: string;
    @Column()
    txtErStreet: string;
    @Column()
    txtErCity: string;
    @Column()
    txtErState: string;
    @Column()
    txtErZip: string;
    @Column()
    txtContactName: string;
    @Column()
    txtContactPhone: string;
    @Column()
    txtContactStreet: string;
    @Column()
    txtContactCity: string;
    @Column()
    txtContactState: string;
    @Column()
    txtContactZip: string;
    @Column()
    ddlGroupNumber: string;
    @Column()
    txtInfoDate: string;
    @Column()
    txtOfferDate: string;
    @Column()
    txtHireDate: string;
    @Column()
    txtStartDate: string;

    @Column()
    chkItem1: boolean; //1
    @Column()
    chkItem2: boolean;
    @Column()
    chkItem3: boolean;
    @Column()
    chkItem4: boolean;
    @Column()
    chkItem5: boolean;
    @Column()
    chkItem6: boolean;
    @Column()
    ChkItem7: boolean;
    @Column()
    optPreviousEmployer: string; //8
    @Column()
    txtLastEmploymentDate: string; //8

    @Column()
    txtStartWage: string; //10
    @Column()
    ddlOccupation: string; //11
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
