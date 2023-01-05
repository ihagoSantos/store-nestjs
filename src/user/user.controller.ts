/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { ListUserDto } from './dto/listUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
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

    @Put('/:id')
    async updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto){
        
        const updatedUser = await this.userRepository.updateUser(id, updateUserDto);

        return {
            user: new ListUserDto(
                updatedUser.id,
                updatedUser.name
            ),
            message: 'user updated successfully'
        }
    }

    @Delete('/:id')
    async deleteUser(@Param('id') id: string) {
        await this.userRepository.deleteUser(id);

        return {
            message: 'user deleted successfully'
        }
    }
}
