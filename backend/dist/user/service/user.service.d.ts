import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { User } from '../user.entity';
export declare class UserService {
    private UserRepository;
    constructor(UserRepository: Repository<User>);
    getAll(): Promise<User[]>;
    getOne(id: number): Promise<User>;
    create(user: User): Promise<User>;
    update(id: number, user: User): Promise<UpdateResult>;
    delete(id: number): Promise<DeleteResult>;
}
