import { IsString, IsEmail, MinLength, IsNotEmpty } from 'class-validator';
import { EmailIsUnique } from '../validation/emails-is-unique.validator';

export class CreateUserDto {
  @IsString({
    message: 'O parêmetro name deve ser do tipo string',
  })
  @IsNotEmpty({
    message: 'O parâmetro name não pode ser vazio',
  })
  name: string;

  @IsEmail(undefined, { message: 'O parâmetro email informado é inválido' })
  @EmailIsUnique({ message: 'Já existe um usuário com o e-mail informado' })
  email: string;

  @MinLength(6, {
    message: 'O parêmetro password precisa ter no mínimo 6 caracteres',
  })
  password: string;
}
