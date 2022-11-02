import { HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import RecoveryCode from "./code.entity";

@Injectable()
export class RecoveryService {
    constructor(
        @InjectRepository(RecoveryCode)
        private readonly recoveryRepository: Repository<RecoveryCode>,
        private jwtService: JwtService
    ) { }

    async generateCode(userId: number,) {
        const min = Math.ceil(100000);
        const max = Math.floor(999999);

        const payload = { code: Math.floor(Math.random() * (max - min)) + min }
        const recoveryCode = this.jwtService.sign(payload, { secret: `${process.env.JWT_ACCESS_SECRET}`, expiresIn: '30m' })
        await this.saveCode(userId, recoveryCode)
        return payload.code;
    }

    async saveCode(userId: number, recoveryCode: string) {
        const codeData = await this.recoveryRepository
            .createQueryBuilder('recoveryCodes')
            .where('recoveryCodes.userId = :userId', { userId })
            .getOne();
        if (codeData) {
            codeData.recoveryCode = recoveryCode;
            return await this.recoveryRepository.save(codeData);
        }
        return await this.recoveryRepository.save({ userId, recoveryCode })
    }

    async deleteCode(recoveryCode: string) {
        const token = await this.getCode(recoveryCode);
        if (!token) {
            throw new HttpException("Token not found", HttpStatus.NOT_FOUND);
        }
        return await this.recoveryRepository.delete(token.id)
    }

    async getCode(recoveryCode: string) {
        return await this.recoveryRepository
            .createQueryBuilder('recoveryCodes')
            .where('recoveryCodes.recoveryCode = :recoveryCode', { recoveryCode })
            .getOne();
    }

    async getCodeByUserId(userId: number) {
        return await this.recoveryRepository
            .createQueryBuilder('recoveryCodes')
            .where('recoveryCodes.userId = :userId', { userId })
            .getOne();
    }

    async validateCode(userId: number, userCode) {
        const token = await this.getCodeByUserId(userId)
        const { code } = await this.jwtService.verify(token.recoveryCode, { secret: `${process.env.JWT_ACCESS_SECRET}` })
        if (code == userCode) {
            return true;
        } else {
            throw new HttpException('Wrong code', HttpStatus.BAD_REQUEST);
        }
    }
}
