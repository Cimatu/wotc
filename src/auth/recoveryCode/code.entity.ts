import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/users.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('recoveryCodes')
class RecoveryCode {
    @ApiProperty({ example: 1, description: 'Unique identificator' })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ example: 1, description: 'Unique identificator' })
    @OneToOne(() => User)
    @JoinColumn()
    user: User;

    @ApiProperty({ example: 3, description: 'User id' })
    @Column({ nullable: false })
    userId: number;

    @ApiProperty({ example: "789431", description: 'Recovery code' })
    @Column({ nullable: true })
    recoveryCode: string;
}

export default RecoveryCode;