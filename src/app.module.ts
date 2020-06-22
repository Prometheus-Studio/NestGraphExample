import { Module } from '@nestjs/common';
import { AppRestModule } from './rest-service/app.module';
import { AppGraphQLModule } from './graphql-service/app.module';
import { GraphQLModule } from '@nestjs/graphql';
import path from 'path';

@Module({
  imports: [
    AppRestModule, 
    AppGraphQLModule, 
    GraphQLModule.forRoot({
    installSubscriptionHandlers: true,
    autoSchemaFile: path.join(process.cwd(), 'src/schema.gql'),
  })],
  exports: [AppRestModule, AppGraphQLModule],
})
export class CoreModule { }
