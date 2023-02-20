import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UserType } from "./User.type";
import { UsersService } from "./users.service";


@Resolver(of => UserType)
export class UserResolver {
    constructor(
        private usersService: UsersService
    ){}

    @Query(returns => UserType)
    getUser(
        @Args('id') id:string,
    ) {
        return this.usersService.getUser(id)
    }

    @Mutation(returns => UserType)
    createUsers(
        @Args('firstName') firstName:string,
        @Args('lastName') lastName:string,
        @Args('email') email:string,
        @Args('mobile') mobile:number
        ){
            return this.usersService.createUsers(firstName,lastName,email,mobile)
        } 

}