import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, IsEmail, IsNotEmpty } from 'class-validator';
export class CreatePostRequestDto {
  @ApiProperty({ example: 'My new post' })
  @IsString()
  username: string;

  @ApiPropertyOptional({ type: ['file'] })
  @IsOptional()
  image: string;

  @ApiPropertyOptional()
  @IsEmail({}, { message: 'Must be e-mail format' })
  email: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Must be not empty' })
  homepage: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Must be not empty' })
  captcha: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Must be not empty' })
  text: string;
}
