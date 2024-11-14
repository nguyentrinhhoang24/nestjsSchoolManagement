import { Controller, Post, Put, Param, Body, Delete, Get } from '@nestjs/common';
import { ClassGroupService } from './classgroup.service';
import { UpdateClassGroupDto } from './dto/updateclassgroup.dto';
import { CreateClassGroupDto } from './dto/createclassgroup.dto';
import { ClassGroup } from './schemas/classgroup.schema';

@Controller('classgroup')
export class ClassGroupController {
  constructor(private readonly classGroupService: ClassGroupService) {}

  @Get()
  async getAllClassGroup(): Promise<ClassGroup[]> {
    return this.classGroupService.findAll();
  }

  @Post()
  async createClassGroup(@Body() classGroup: CreateClassGroupDto): Promise<ClassGroup> {
    return this.classGroupService.create(classGroup);
  }

  @Get(':id')
  async getClassGroup(@Param('id') id: string,): Promise<ClassGroup> {
    return this.classGroupService.findById(id);
  }
  
  @Put(':id')
  async updateClassGroup(@Param('id') id: string, @Body() classGroup: UpdateClassGroupDto): Promise<ClassGroup> {
    return this.classGroupService.updateById(id, classGroup);
  }

  @Delete(':id')
  async deleteClassGroup(@Param('id') id: string,): Promise<ClassGroup> {
    return this.classGroupService.deleteById(id);
  }
}