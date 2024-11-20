import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { HealthExam } from "./schemas/healthexam.schema";
import { CreateHealthExamDto } from "./dto/createHealthExam.dto";
import { UpdateHealthExamDto } from "./dto/updatehealthexam.dto";

@Injectable()
export class HealthExamService {
    constructor(@InjectModel('healthexam') private healthexamModel: Model<HealthExam>) {}

    async findAll(): Promise<HealthExam[]> {
        const healthexams = await this.healthexamModel.find();
        return healthexams;
    }

    async create(createHealthExamDto: CreateHealthExamDto): Promise<HealthExam> {
        const newHealthExam = await this.healthexamModel.create(createHealthExamDto);
        return newHealthExam;
    }

    async findById(id: string): Promise<HealthExam> {
        const healthExam = await this.healthexamModel.findById(id);
        if(!healthExam) {
            throw new NotFoundException('health exam schedule not found')
        }
        return healthExam; 
    }

    async updateById(id: string, updateHealthExamDto: UpdateHealthExamDto): Promise<HealthExam> {
        return await this.healthexamModel.findByIdAndUpdate(id, updateHealthExamDto, {
            new: true,
            runValidators: true,
        });
    }

    async deleteById(id: string): Promise<HealthExam> {
        return await this.healthexamModel.findByIdAndDelete(id);
    }
}