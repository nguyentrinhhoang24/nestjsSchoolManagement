import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { School } from 'src/school/schemas/school.schema';
import { UpdateSchoolDto } from 'src/school/dto/updateschool.dto';
import { CreateSchoolDto } from './dto/createschool.dto';
import { User } from 'src/auth/schemas/user.schema';
import { Role } from 'src/auth/enums/role.enum';

@Injectable()
export class SchoolService {
  constructor(@InjectModel(School.name) private schoolModel: mongoose.Model<School>) {}

  async findAll(): Promise<School[]> {
    const schools = await this.schoolModel.find();
    return schools;
  }

  async create(school: CreateSchoolDto, user: User): Promise<School> {
    const data = Object.assign(school, { user: user._id });
    const newSchool = await this.schoolModel.create(data);
    return newSchool;
  }

  async findById(id: string): Promise<School> {
    const school = await this.schoolModel.findById(id);
    if (!school) {
      throw new NotFoundException('School not found.');
    }
    return school;
  }

  async updateById(id: string, school: UpdateSchoolDto, user: User): Promise<School> {
    // Kiểm tra nếu người dùng có vai trò là Schooladmin và đảm bảo họ chỉ được cập nhật trường của mình
    if (user.role.includes(Role.Schooladmin)) {
      console.log(typeof id);
      console.log(typeof user.school_id);
      if (user.school_id != id) {
        throw new ForbiddenException('can not update this school :))');
      }
      else {
        const updatedSchool = await this.schoolModel.findByIdAndUpdate(id, school, {
          new: true,
          runValidators: true,
      });
  
      if (!updatedSchool) {
          throw new NotFoundException('School not found :)))');
      }
      return updatedSchool;
      }
    } else {
      throw new ForbiddenException('dont have permission to update :))')
    }
}

  async deleteById(id: string): Promise<School> {
    return await this.schoolModel.findByIdAndDelete(id);
  }
}