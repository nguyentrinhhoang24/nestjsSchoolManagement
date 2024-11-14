import { Controller, Post, Put, Param, Body, Delete, Get } from '@nestjs/common';
import { BranchService } from './branch.service';
import { UpdateBranchDto } from 'src/branch/dto/updatebranch.dto';
import { CreateBranchDto } from 'src/branch/dto/createbranch.dto';
import { Branch } from './schemas/branch.schema';

@Controller('branch')
export class BranchController {
  constructor(private readonly branchService: BranchService) {}

  @Get()
  async getAllBranch(): Promise<Branch[]> {
    return this.branchService.findAll();
  }

  @Post()
  async createBranch(@Body() branch: CreateBranchDto): Promise<Branch> {
    return this.branchService.create(branch);
  }

  @Get(':id')
  async getBranch(@Param('id') id: string,): Promise<Branch> {
    return this.branchService.findById(id);
  }
  
  @Put(':id')
  async updateBranch(@Param('id') id: string, @Body() Branch: UpdateBranchDto): Promise<Branch> {
    return this.branchService.updateById(id, Branch);
  }

  @Delete(':id')
  async deleteBranch(@Param('id') id: string,): Promise<Branch> {
    return this.branchService.deleteById(id);
  }
}