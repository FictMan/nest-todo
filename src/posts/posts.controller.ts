import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';

import { PostsService } from './posts.service';
import { PostDto } from './dto/post.dto';
import { CreatePostDto } from './dto/create-post.dto';


@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {
    this.postService = postService;
  }

  @Get()
  async findAll(): Promise<PostDto[]> {
    return this.postService.findAll();
  }

  @ApiParam({ name: 'id', required: true })
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PostDto> {
    return this.postService.findOne(id);
  }

  @Post()
  async create(@Body() data: CreatePostDto): Promise<PostDto> {
    return await this.postService.create(data);
  }

  @ApiParam({ name: 'id', required: true })
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<{ id: string, status: number }> {
    return await this.postService.delete(id)
  }
}
