/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { ListUserDto } from './dto/listUser.dto';
import { UserRepository } from './user.repository';

@Controller('/user')
export class UserController {
  
    constructor(
        private readonly userRepository: UserRepository
    ){}

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto) {
        const user = await this.userRepository.createUser(createUserDto);
        return {
            user: new ListUserDto(
                user.id,
                user.name
            ),
            message: 'user created successfully'
        }
    }

    @Get()
    async listUsers(): Promise<ListUserDto[]> {
        const users = await this.userRepository.listUsers();
        return users.map(user => {
            return new ListUserDto(
                user.id,
                user.name
            )
        })
    }

}
