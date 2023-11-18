import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { VerifyEmailDto } from './dto/verify-email.dto';
import { UserLoginDto } from './dto/user-login.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() dto: CreateUserDto): Promise<void> {
    console.log(dto);
  }

  @Post('/email-verfiy')
  async verifyEmail(@Query() dto: VerifyEmailDto) {
    console.log(dto);
    return;
  }

  @Post('/login')
  async login(@Body() dto: UserLoginDto) {
    console.log(dto);
    return;
  }

  @Get('/:id')
  async getUserInfo(@Param('id') userId: string) {
    console.log(userId);
    return;
  }
}
