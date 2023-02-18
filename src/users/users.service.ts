import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { v4 as uuid} from 'uuid'


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private UserRepository:Repository<User>
    ){}

    async createUsers(firstName,lastName,email,mobile){
        const user = this.UserRepository.create({
            id:uuid(),
            firstName,
            lastName,
            email,
            mobile
        });
      return this.UserRepository.save(user)
    }
}
