import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { SubjectSchema } from "./schemas/subject.schema";
import { SubjectController } from "./subject.controller";
import { SubjectService } from "./subject.service";

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'subject', schema: SubjectSchema}])
    ],
    controllers: [SubjectController],
    providers: [SubjectService],
    exports: [SubjectService],
})

export class SubjectModule {}