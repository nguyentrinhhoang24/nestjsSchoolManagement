import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Branch } from 'src/branch/schemas/branch.schema';
import { UpdateBranchDto } from 'src/branch/dto/updatebranch.dto';
import { CreateBranchDto } from 'src/branch/dto/createbranch.dto';

@Injectable()
export class BranchService {
  constructor(@InjectModel('branch') private branchModel: Model<Branch>) {}

  async findAll(): Promise<Branch[]> {
    const branchs = await this.branchModel.find();
    return branchs;
  }

  async create(branch: CreateBranchDto): Promise<Branch> {
    const res = await this.branchModel.create(branch);
    return res;
  }

  async findById(id: string): Promise<Branch> {
    const branch = await this.branchModel.findById(id);
    if (!branch) {
      throw new NotFoundException('branch not found.');
    }
    return branch;
  }

  async updateById(id: string, branch: UpdateBranchDto): Promise<Branch> {
    return await this.branchModel.findByIdAndUpdate(id, branch, {
      new: true,
      runValidators: true,
    });
  }

  async deleteById(id: string): Promise<Branch> {
    return await this.branchModel.findByIdAndDelete(id);
  }
}