import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { EmailsIsUniqueValidator } from './validation/emails-is-unique.validator';
import { UserExistsWithId } from './validation/user-exists-with_id.validator';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserRepository, EmailsIsUniqueValidator, UserExistsWithId],
})
export class UserModule {}
