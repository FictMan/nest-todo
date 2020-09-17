import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { genSalt, hash } from 'bcrypt';
import { User } from './user.entity';
import { UserDto } from './dto/user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { Post } from '../posts/post.entity';

@Injectable()
export class UsersService {
  constructor(@Inject('USER_REPOSITORY') private readonly usersRepository: typeof User) {
    this.usersRepository = usersRepository;
  }

  async findAll(): Promise<UserDto[]> {
    const users = await this.usersRepository.findAll({});
    return users.map(user => new UserDto(user));
  }

  async getUserById(id: string): Promise<UserDto> {
    // @ts-ignore
    const user = await this.usersRepository.findOne({ where: { id }, include: [Post] });

    if (!user) {
      throw new HttpException(
        'User with given id not found',
        HttpStatus.NOT_FOUND,
      );
    }
    return new UserDto(user);
  }

  async create(data: CreateUserDto): Promise<UserDto> {
    try {
      const user = new User();
      user.username = data.username;

      const salt = await genSalt(10);
      user.password = await hash(data.password, salt);

      const userData = await user.save();

      return new UserDto(userData);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async delete(id: string): Promise<{ id: string, status: number }> {
    await this.usersRepository.destroy({ where: { id } });

    return { id, status: HttpStatus.OK };
  }
}
