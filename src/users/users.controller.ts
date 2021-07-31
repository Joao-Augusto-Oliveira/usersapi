import { Get } from '@nestjs/common';
import { Body, Post, Controller } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { UserEntity } from 'src/database/user.entity';
import { UserDto } from './dtos/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async index(): Promise<UserEntity[]> {
    return await this.usersService.findAll();
  }

  @Post()
  @ApiBody({ type: UserDto })
  async create(@Body() user: UserDto): Promise<UserEntity> {
    return await this.usersService.create(user);
  }
}
