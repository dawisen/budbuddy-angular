import { UserService } from '../service/user.service';
import { UpdateResult, DeleteResult } from 'typeorm';
import { User } from '../user.entity';
export declare class UserController {
    private UserService;
    constructor(UserService: UserService);
    getAll(): Promise<User[]>;
    getOne(idObject: {
        id: number;
    }): Promise<User>;
    create(user: User): Promise<User>;
    update(id: number, user: User): Promise<UpdateResult>;
    delete(id: number): Promise<DeleteResult>;
}
