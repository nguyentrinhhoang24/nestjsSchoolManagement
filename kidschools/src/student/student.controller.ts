import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { StudentService } from "./student.service";
import { Student } from "./schemas/student.schema";
import { CreateStudentDto } from "./dto/createstudent.dto";
import { UpdateStudentDto } from "./dto/updatestudent.dto";

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService) {}
  
    @Get()
    async getAllStudent(): Promise<Student[]> {
      return this.studentService.findAll();
    }
  
    @Post()
    async createStudent(@Body() createStudentDto: CreateStudentDto): Promise<Student> {
      return this.studentService.create(createStudentDto);
    }
  
    @Get(':id')
    async getStudent(@Param('id') id: string,): Promise<Student> {
      return this.studentService.findById(id);
    }
    
    @Put(':id')
    async updateStudent(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto): Promise<Student> {
      return this.studentService.updateById(id, updateStudentDto);
    }
  
    @Delete(':id')
    async deleteStudent(@Param('id') id: string,): Promise<Student> {
      return this.studentService.deleteById(id);
    }
  }
  