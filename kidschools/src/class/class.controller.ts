import { Controller, Post, Put, Param, Body, Delete, Get } from '@nestjs/common';
import { ClassService } from './class.service';
import { UpdateClassDto } from './dto/updateclass.dto';
import { CreateClassDto } from './dto/createclass.dto';
import { Class } from './schemas/class.schema';

@Controller('class')
export class ClassController {
  constructor(private readonly classService: ClassService) {}

  @Get()
  async getAllClass(): Promise<Class[]> {
    return this.classService.findAll();
  }

  @Post()
  async createClass(@Body() createClassDto: CreateClassDto): Promise<Class> {
    return this.classService.create(createClassDto);
  }

  @Get(':id')
  async getClass(@Param('id') id: string,): Promise<Class> {
    return this.classService.findById(id);
  }
  
  @Put(':id')
  async updateClass(@Param('id') id: string, @Body() updateClassDto: UpdateClassDto): Promise<Class> {
    return this.classService.updateById(id, updateClassDto);
  }

  @Delete(':id')
  async deleteClass(@Param('id') id: string,): Promise<Class> {
    return this.classService.deleteById(id);
  }
}