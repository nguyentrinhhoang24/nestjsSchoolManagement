import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { SessionController } from "./session.controller";
import { SessionService } from "./session.service";
import { SessionSchema } from "src/session/schemas/session.schema";

@Module({
    imports: [
      MongooseModule.forFeature([{name: 'Session', schema: SessionSchema}]),
    ],
    controllers: [SessionController],
    providers: [SessionService],
    exports: [SessionService],
  })
  export class SessionModule {}