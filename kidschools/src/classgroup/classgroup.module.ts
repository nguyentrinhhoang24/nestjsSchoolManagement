import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ClassGroupController } from "./classgroup.controller";
import { ClassGroupService } from "./classgroup.service";
import { ClassGroupSchema } from "./schemas/classgroup.schema";

@Module({
    imports: [
      MongooseModule.forFeature([{name: 'ClassGroup', schema: ClassGroupSchema}]),
    ],
    controllers: [ClassGroupController],
    providers: [ClassGroupService],
    exports: [ClassGroupService],
  })
  export class ClassGroupModule {}