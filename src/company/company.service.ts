import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Company from './company.entity';
import { CreateCompanyDto } from './dto/create-company.dto';

@Injectable()
export class CompanyService {
    constructor(
        @InjectRepository(Company)
        private readonly companyRepository: Repository<Company>,
    ) { }

    // async createAdmin(dto: SignDto) {
    //     const admin = await this.userRepository.create(dto);
    //     admin.role = Role.ADMIN;
    //     return await this.userRepository.save(admin);
    // }

    // async updateEmail(dto: { email: string, id: number }) {
    //     const user = await this.getUserById(dto.id);
    //     user.email = dto.email;
    //     return await this.userRepository.save(user);F
    // }

    async createCompany(dto: CreateCompanyDto) {
        return await this.companyRepository.save(dto);
    }

    async updateCompanyById(id: number, dto: CreateCompanyDto) {
        // const { name,  } = dto;

        const news = await this.getCompanyById(id);
        if (!news) {
            throw new HttpException("News not found", HttpStatus.NOT_FOUND);
        }

        await this.companyRepository
            .createQueryBuilder()
            .update(Company)
            .set({ ...dto })
            .where("id = :id", { id })
            .execute();
        return await this.getCompanyById(id);
    }

    
    async getCompanyById(id: number) {
        return await this.companyRepository
            .createQueryBuilder('companies')
            .where('companies.id = :id', { id })
            .getOne();
    }

    async deleteCompanyById(id: number) {
        let event = await this.getCompanyById(id);
        if (!event) {
            throw new HttpException("Company not found", HttpStatus.NOT_FOUND);
        }
        await this.companyRepository.delete(id);
        event = await this.getCompanyById(id);
        if (!event) {
            return { message: "Company was successfuly deleted" }
        } else {
            return { message: "Company wasn't deleted" }
        }
    }

}
