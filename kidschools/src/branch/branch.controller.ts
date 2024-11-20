import { Controller, Post, Put, Param, Body, Delete, Get, UseGuards, Req } from '@nestjs/common';
import { BranchService } from './branch.service';
import { UpdateBranchDto } from 'src/branch/dto/updatebranch.dto';
import { CreateBranchDto } from 'src/branch/dto/createbranch.dto';
import { Branch } from './schemas/branch.schema';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/enums/role.enum';

@Controller('branch')
// @UseGuards(AuthGuard(), RolesGuard)
export class BranchController {
  constructor(private readonly branchService: BranchService) {}

  @Get()
  async getAllBranch(): Promise<Branch[]> {
    return this.branchService.findAll();
  }

  @Post()
  // @Roles(Role.Schooladmin)
  async createBranch(@Body() createBranchDto: CreateBranchDto, @Req() req): Promise<Branch> {
    // const user = req.user;
    // createBranchDto.school_id = user.school_id;
    return this.branchService.create(createBranchDto);
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