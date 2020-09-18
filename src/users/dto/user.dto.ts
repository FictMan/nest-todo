import { ApiProperty } from '@nestjs/swagger';
import { User } from '../user.entity';

export class UserDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  readonly phone: string;

  @ApiProperty()
  readonly firstName: string;

  @ApiProperty()
  readonly username: string;

  @ApiProperty()
  readonly email: string;

  constructor(user: User) {
    this.id = user.id;
    this.phone = user.phone;
    this.username = user.username;
    this.email = user.email;
    this.firstName = user.firstName;
  }
}
