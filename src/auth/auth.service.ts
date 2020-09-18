import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
const bcrypt = require('bcrypt');

import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(username: string, plainTextPassword: string): Promise<any> {
    try {
      const user = await this.usersService.getUserByUsername(username)
      await this.verifyPassword(plainTextPassword, user.password)
      user.password = undefined;

      return user;
    } catch (error) {
      throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
    }
  }

  private async verifyPassword(plainTextPassword: string, hashedPassword: string) {
    const isPasswordMatching = await bcrypt.compare(plainTextPassword, hashedPassword);

    if (!isPasswordMatching) {
      throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
    }
  }
}
