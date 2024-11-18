import { Injectable, NotFoundException } from "@nestjs/common";
import { Model } from "mongoose";
import { Subject } from "./schemas/subject.schema";
import { InjectModel } from "@nestjs/mongoose";
import { CreateSubjectDto } from "./dto/createsubject.dto";
import { UpdateSubjectDto } from "./dto/updatesubject.dto";

@Injectable()
export class SubjectService {
    constructor(@InjectModel('subject') private subjectModel: Model<Subject>) {}
    
    async findAll(): Promise<Subject[]> {
        const subject = await this.subjectModel.find();
        return subject;
    }

    async create(createSubjectDto: CreateSubjectDto): Promise<Subject> {
        const newSubject = await this.subjectModel.create(createSubjectDto);
        return newSubject;
    }

    async findById(id: string): Promise<Subject> {
        const subject = await this.subjectModel.findById(id);
        if (!subject) {
            throw new NotFoundException('subject not found!!');
        }
        return subject;
    }

    async updateById(id: string, updateSubjectDto: UpdateSubjectDto): Promise<Subject> {
        return await this.subjectModel.findByIdAndUpdate(id, updateSubjectDto, {
            new: true,
            runValidators: true,
        });
    }
    
    async deleteById(id: string): Promise<Subject> {
        return await this.subjectModel.findByIdAndDelete(id);
    }
}