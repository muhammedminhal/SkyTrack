import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { v4 as uuid} from 'uuid'


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private userRepository:Repository<User>
    ){}


    async getUser(id:string):Promise<User>{
       return  this.userRepository.findOne({ 
        where: { 
          id: id
        } 
      })
    }

    async createUsers(firstName,lastName,email,mobile):Promise<User>{
        const user = this.userRepository.create({
            id:uuid(),
            firstName,
            lastName,
            email,
            mobile
        });
      return this.userRepository.save(user)
    }
}
