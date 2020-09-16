import { ApiProperty } from '@nestjs/swagger';
import { User } from '../user.entity';
import { PostDto } from '../../posts/dto/post.dto';

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
  readonly posts: PostDto[];

  constructor(user: User) {
    this.id = user.id;
    this.phone = user.phone;
    this.username = user.username;
    this.firstName = user.firstName;
    this.posts = user.posts
  }
}
