import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Class } from './schemas/class.schema';
import { UpdateClassDto } from './dto/updateclass.dto';
import { CreateClassDto } from './dto/createclass.dto';

@Injectable()
export class ClassService {
  constructor(@InjectModel('Class') private classModel: Model<Class>) {}

  async findAll(): Promise<Class[]> {
    const classs = await this.classModel.find();
    return classs;
  }

  async create(createClassDto: CreateClassDto): Promise<Class> {
    const res = await this.classModel.create(createClassDto);
    return res;
  }

  async findById(id: string): Promise<Class> {
    const Class = await this.classModel.findById(id);
    if (!Class) {
      throw new NotFoundException('Class not found.');
    }
    return Class;
  }

  async updateById(id: string, updateClassDto: UpdateClassDto): Promise<Class> {
    return await this.classModel.findByIdAndUpdate(id, updateClassDto, {
      new: true,
      runValidators: true,
    });
  }

  async deleteById(id: string): Promise<Class> {
    return await this.classModel.findByIdAndDelete(id);
  }
}