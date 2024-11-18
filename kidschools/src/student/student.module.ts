import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { StudentSchema } from "./schemas/student.schema";
import { StudentController } from "./student.controller";
import { StudentService } from "./student.service";

@Module({
    imports: [MongooseModule.forFeature([{name: 'student', schema: StudentSchema}])],
    controllers: [StudentController],
    providers: [StudentService],
    exports: [StudentService],
})

export class StudentModule {}