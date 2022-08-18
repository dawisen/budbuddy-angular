import {
  Controller,
  Get,
  Post,
  Param,
  Put,
  Delete,
  Body,
} from '@nestjs/common';
import { UserService } from '../service/user.service';
import { UpdateResult, DeleteResult } from 'typeorm';
import { User } from '../user.entity';

@Controller('users')
export class UserController {
  constructor(private UserService: UserService) {}

  @Get()
  async getAll(): Promise<User[]> {
    return await this.UserService.getAll();
  }

  @Get(':id')
  async getOne(@Param() idObject: { id: number }): Promise<User> {
    return await this.UserService.getOne(idObject.id);
  }

  @Post()
  async create(@Body() user: User): Promise<User> {
    return await this.UserService.create(user);
  }

  @Put(':id')
  async update(@Param() id: number, @Body() user: User): Promise<UpdateResult> {
    return await this.UserService.update(id, user);
  }

  @Delete(':id')
  async delete(@Param() id: number): Promise<DeleteResult> {
    return await this.UserService.delete(id);
  }
}
