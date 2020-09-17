import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Post } from './post.entity';
import { PostDto } from './dto/post.dto';
import { CreatePostDto } from './dto/create-post.dto';
import { User } from '../users/user.entity';

@Injectable()
export class PostsService {
  constructor(@Inject('POST_REPOSITORY') private readonly postsRepository: typeof Post) {
    this.postsRepository = postsRepository;
  }

  async findAll(): Promise<PostDto[]> {
    const posts = await this.postsRepository.findAll({});
    return posts.map(post => new PostDto(post));
  }

  async findOne(id: string): Promise<PostDto> {
    // @ts-ignore
    const post = await this.postsRepository.findOne({ where: { id }, include: [User] })

    if (!post) {
      throw new HttpException(
        'Post with given id not found',
        HttpStatus.NOT_FOUND,
      );
    }

    return new PostDto(post)
  }

  async create(data: CreatePostDto): Promise<PostDto> {
    try {
      const post = new Post()
      post.title = data.title
      post.content = data.content
      post.userId = data.userId

      const postData = await post.save()

      return new PostDto(postData)
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async delete(id: string): Promise<{ id: string, status: number }> {
    await this.postsRepository.destroy({ where: { id } });

    return { id, status: HttpStatus.OK };
  }
}
