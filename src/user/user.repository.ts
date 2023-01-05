import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { UserEntity } from './user.entity';

@Injectable()
export class UserRepository {
  private users: UserEntity[] = [];

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    // createUserDto.id = randomUUID();
    const userEntity = new UserEntity(
      randomUUID(),
      createUserDto.name,
      createUserDto.email,
      createUserDto.password,
    );
    this.users.push(userEntity);

    return userEntity;
  }

  async listUsers(): Promise<UserEntity[]> {
    return this.users;
  }

  async existsUserWithEmail(email: string): Promise<boolean> {
    const possibleUser = this.users.find((user) => user.email === email);
    return possibleUser !== undefined;
  }

  async existsUserWithId(id: string): Promise<boolean> {
    const possibleUser = this.users.find((user) => user.id === id);
    return possibleUser !== undefined;
  }

  async updateUser(
    id: string,
    updateUserData: Partial<UserEntity>,
  ): Promise<UserEntity> {
    const possibleUser = this.users.find((user) => user.id === id);

    if (!possibleUser) {
      throw new Error('User not found');
    }
    Object.entries(updateUserData).forEach(([key, value]) => {
      if (key === 'id') {
        return;
      }

      possibleUser[key] = value;
    });

    return possibleUser;
  }

  async deleteUser(id: string) {
    const possibleUserIndex = this.users.findIndex((user) => user.id === id);

    if (possibleUserIndex === -1) {
      throw new Error('User not found');
    }

    this.users.splice(possibleUserIndex, 1);
  }
}
