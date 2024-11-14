import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { SchoolController } from "./school.controller";
import { SchoolService } from "./school.service";
import { SchoolSchema } from "src/school/schemas/school.schema";
import { AuthModule } from "src/auth/auth.module";

@Module({
    imports: [
      AuthModule,
      MongooseModule.forFeature([{name: 'School', schema: SchoolSchema}]),
    ],
    controllers: [SchoolController],
    providers: [SchoolService],
    exports: [SchoolService],
  })
  export class SchoolModule {}