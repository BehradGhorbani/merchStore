import { IsEmail, IsString, IsStrongPassword } from 'class-validator';

export class SignUpUserDto {
  @IsString()
  name: string

  @IsString()
  lastName: string

  @IsEmail({require_tld: true})
  email: string

  @IsStrongPassword({minLength: 8})
  password: string
}
