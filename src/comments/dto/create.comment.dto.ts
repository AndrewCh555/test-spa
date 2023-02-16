import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateCommentDto {
  @IsString({ message: 'Must be string' })
  @IsNotEmpty({ message: 'Must be not empty' })
  username: string;

  @IsEmail({}, { message: 'Must be e-mail format' })
  email: string;

  @IsString()
  homepage: string;

  @IsString()
  text: string;

  @IsNotEmpty({ message: 'Must be not empty' })
  postId: number;
}
