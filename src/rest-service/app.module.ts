import { Module } from "@nestjs/common";
import { AppRestService } from './app.service';
import { AppRestController } from './app.controller';

@Module({
    imports: [AppRestModule],
    controllers: [AppRestController],
    providers: [AppRestService]
})
export class AppRestModule { }