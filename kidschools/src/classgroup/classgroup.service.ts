import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ClassGroup } from './schemas/classgroup.schema';
import { UpdateClassGroupDto } from './dto/updateclassgroup.dto';
import { CreateClassGroupDto } from './dto/createclassgroup.dto';

@Injectable()
export class ClassGroupService {
  constructor(@InjectModel('ClassGroup') private classGroupModel: Model<ClassGroup>) {}

  async findAll(): Promise<ClassGroup[]> {
    const classgroups = await this.classGroupModel.find();
    return classgroups;
  }

  async create(classGroup: CreateClassGroupDto): Promise<ClassGroup> {
    const res = await this.classGroupModel.create(classGroup);
    return res;
  }

  async findById(id: string): Promise<ClassGroup> {
    const ClassGroup = await this.classGroupModel.findById(id);
    if (!ClassGroup) {
      throw new NotFoundException('ClassGroup not found.');
    }
    return ClassGroup;
  }

  async updateById(id: string, classGroup: UpdateClassGroupDto): Promise<ClassGroup> {
    return await this.classGroupModel.findByIdAndUpdate(id, classGroup, {
      new: true,
      runValidators: true,
    });
  }

  async deleteById(id: string): Promise<ClassGroup> {
    return await this.classGroupModel.findByIdAndDelete(id);
  }
}