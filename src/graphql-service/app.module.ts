import { Module } from "@nestjs/common";
import { AppResolver } from "./app.resolver";
import { AppGraphQLService } from "./app.service";

@Module({
    providers: [AppResolver, AppGraphQLService]
})
export class AppGraphQLModule { }