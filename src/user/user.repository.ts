import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateUserDto } from './dto/createUser.dto';
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
}
