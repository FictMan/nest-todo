import { ApiProperty } from '@nestjs/swagger';
import { Post } from '../post.entity';
import { UserDto } from '../../users/dto/user.dto';

export class PostDto {
  constructor(post: Post) {
    this.id = post.id;
    this.title = post.title;
    this.content = post.content;
    this.status = post.status;
    this.user = post.user
  }

  @ApiProperty()
  id: number;

  @ApiProperty()
  readonly title: string;

  @ApiProperty()
  readonly content: string;

  @ApiProperty()
  readonly status: string;

  @ApiProperty()
  readonly user: UserDto;
}
