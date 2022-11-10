import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/users.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('companies')
class Company {
    @ApiProperty({ example: 1, description: 'Unique identificator' })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ example: "VironIT", description: 'Company name' })
    @Column()
    companyName: string;

    @ApiProperty({ example: "12-1234567", description: 'FIEN' })
    @Column()
    fein: string;

    @ApiProperty({ example: "CA", description: 'State' })
    @Column({ nullable: true })
    state: string;

    @ApiProperty({ example: 123456, description: 'ZIP' })
    @Column({ nullable: true })
    zip: string;

    @ApiProperty({ example: "Moskovskaya", description: 'Street' })
    @Column({ nullable: true })
    street: string;

    @ApiProperty({ example: "Dima", description: 'Contact name' })
    @Column({ nullable: true })
    contactName: string;

    @ApiProperty({ example: "(29)123-1234", description: 'Phone' })
    @Column({ nullable: true })
    phone: string;
}

export default Company;