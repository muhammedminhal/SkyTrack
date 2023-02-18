import { Module } from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mongodb',
      url:'mongodb://localhost/skytrack',
      synchronize:true,
      useUnifiedTopology:true,
      entities:[
        User
      ]
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile:true
  }),
   UsersModule
  ]
})
export class AppModule {}
