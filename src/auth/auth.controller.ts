import { Controller, HttpCode, Post, Req, UseGuards } from '@nestjs/common';
import { LocalAuthenticationGuard } from './localAuthentication.guard';

@Controller('auth')
export class AuthController {
  // constructor(private readonly authenticationService: AuthService) {}

  @HttpCode(200)
  @UseGuards(LocalAuthenticationGuard)
  @Post('log-in')
  async logIn(@Req() request) {
    const user = request.user;

    user.password = undefined;
    return user;
  }
}
