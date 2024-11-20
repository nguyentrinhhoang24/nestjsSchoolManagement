import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { HealthExamSchema } from "./schemas/healthexam.schema";
import { HealthExamController } from "./healthexam.controller";
import { HealthExamService } from "./healthexam.service";

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'healthexam', schema: HealthExamSchema}])
    ],
    controllers: [HealthExamController],
    providers: [HealthExamService],
    exports: [HealthExamService],
})

export class HealthExamModule {}