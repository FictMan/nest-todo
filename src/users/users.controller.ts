import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiParam } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {
    this.userService = userService;
  }

  @Get()
  async findAll(): Promise<UserDto[]> {
    return this.userService.findAll();
  }

  @ApiParam({ name: 'id', required: true })
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<UserDto> {
    return this.userService.getUserById(id);
  }

  @Post()
  async create(@Body() data: CreateUserDto): Promise<UserDto> {
    return await this.userService.create(data);
  }

  @ApiParam({ name: 'id', required: true })
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<{ id: string, status: number }> {
    return await this.userService.delete(id)
  }
}
