import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FeeItem } from './schemas/feeitem.schema';
import { CreateFeeItemDto } from './dto/createfeeiteam.dto';
import { UpdateFeeItemDto } from './dto/updatefeeiteam.dto';

@Injectable()
export class FeeItemService {
    constructor(@InjectModel('feeitem') private feeitemModel: Model<FeeItem>) {}

    async findAll(): Promise<FeeItem[]> {
        const feeitems = await this.feeitemModel.find();
        return feeitems;
    }

    async create(createFeeItemDto: CreateFeeItemDto): Promise<FeeItem> {
        const newFeeItem = await this.feeitemModel.create(createFeeItemDto);
        return newFeeItem;
    }

    async findById(id: string): Promise<FeeItem> {
        const feeItem = await this.feeitemModel.findById(id);
        if(!feeItem) {
            throw new NotFoundException('Fee item not found!!')
        }
        return feeItem;
    }

    async updateById(id: string, updateFeeItemDto: UpdateFeeItemDto): Promise<FeeItem> {
        return await this.feeitemModel.findByIdAndUpdate(id, updateFeeItemDto, {
            new: true,
            runValidators: true,
        });
    }

    async deleteById(id: string): Promise<FeeItem> {
        return await this.feeitemModel.findByIdAndDelete(id);
    }

}
