import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class CreatePostDto {
  @IsString({ message: 'Must be string' })
  @IsNotEmpty({ message: 'Must be not empty' })
  username: string;

  @IsEmail({}, { message: 'Must be e-mail format' })
  @IsNotEmpty({ message: 'Must be not empty' })
  email: string;

  @IsNotEmpty({ message: 'Must be not empty' })
  homepage: string;

  @IsNotEmpty({ message: 'Must be not empty' })
  text: string;
}
