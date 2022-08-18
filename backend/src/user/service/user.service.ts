import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { User } from '../user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User, "userConnection") private UserRepository: Repository<User>
  ) {}
  async getAll(): Promise<User[]> {
    return await this.UserRepository.find();
  }
  async getOne(id: number): Promise<User> {
    return await this.UserRepository.findOneBy({ id: id });
  }
  async create(user: User): Promise<User> {
    return await this.UserRepository.save(user);
  }
  async update(id: number, user: User): Promise<UpdateResult> {
    return await this.UserRepository.update(id, user);
  }
  async delete(id: number): Promise<DeleteResult> {
    return await this.UserRepository.delete(id);
  }
}
