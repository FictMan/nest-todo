import { IsString, MinLength, IsNotEmpty, IsEmail } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  readonly password: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly username: string;

  @ApiProperty()
  @IsEmail()
  @IsString()
  readonly email: string;
}
