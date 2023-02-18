import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UserType } from "./User.type";
import { UsersService } from "./users.service";


@Resolver(of => UserType)
export class UserResolver {
    constructor(
        private usersService: UsersService
    ){}

    @Query(returns => UserType)
    getUsers() {
        return {
            id: 'nkn',
            firstName: 'minhal',
            lastName: 'kk',
            email: 'minhal@email.com',
            mobile: 9292929
        }
    }

    @Mutation(returns => UserType)
    createUsers(
        @Args('firstName') firstName:string,
        @Args('lastName') lastName:string,
        @Args('email') email:string,
        @Args('mobile') mobile:string
        ){
            return this.usersService.createUsers(firstName,lastName,email,mobile)
        } 

}