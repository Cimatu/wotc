import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Role } from "./roles/roles.enum";

@Entity('users')
export class User {
    @ApiProperty({ example: 1, description: 'Unique identificator' })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ example: 'dimasikpodpivasik@gmail.com', description: 'Unique email' })
    @Column({ unique: true, nullable: false })
    email: string;

    @ApiProperty({ example: '123455678', description: 'Password' })
    @Column({ nullable: false })
    password: string;

    @ApiProperty({ example: 'user', description: 'User role, default: manager' })
    @Column({ type: 'enum', enum: Role, default: Role.MANAGER })
    role: Role; 
}
