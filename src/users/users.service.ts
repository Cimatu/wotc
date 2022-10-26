import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { Role } from './roles/roles.enum';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
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

    async createUser(dto: CreateUserDto) {
        const { email } = dto;
        const findUser = await this.getUserByEmail(email);
        if (findUser) {
            throw new NotFoundException("Such email already exists");
        }
        const role = dto.role == "admin" ? Role.ADMIN : Role.MANAGER;
        const user = await this.userRepository.save({ ...dto, role });
        if (!user) {
            throw new NotFoundException("Create user error");
        }
        return user;
    }

    async getUserByEmail(email: string) {
        return await this.userRepository
            .createQueryBuilder('users')
            .where('users.email = :email', { email })
            .getOne();
    }

    async getAllUsers() {
        const users = await this.userRepository
            .createQueryBuilder('users')
            .getMany();
        if (!users) {
            throw new HttpException("User not found", HttpStatus.NOT_FOUND);
        }
        return users;
    }


    async getUserById(id: number) {
        return await this.userRepository
            .createQueryBuilder('users')
            .where('users.id = :id', { id })
            .getOne();
    }

    async updatePassword(email: string, password: string) {
        return await this.userRepository
            .createQueryBuilder()
            .update(User)
            .set({ password })
            .where("email = :email", { email })
            .execute();
    }

    // async deteteUserById(id: number) {
    //     const user = this.getUserById(id);
    //     if (!user) {
    //         throw new HttpException("User not found", HttpStatus.NOT_FOUND);
    //     }
    //     return await this.userRepository.delete(id);
    // }
}
