import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { MenuSchema } from "./schemas/menu.schema";
import { MenuController } from "./menu.controller";
import { MenuService } from "./menu.service";

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'menu', schema: MenuSchema}]),
    ],
    controllers: [MenuController],
    providers: [MenuService],
    exports: [MenuService],
})

export class MenuModule {}