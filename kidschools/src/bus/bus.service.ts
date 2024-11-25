import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Bus } from './schemas/bus.schema';
import { CreateBusDto } from './dto/createbus.dto';
import { UpdateBusDto } from './dto/updatebus.dto';

@Injectable()
export class BusService {
    constructor(@InjectModel('bus') private busModel:Model<Bus>){}

    async findAll(): Promise<Bus[]>{
        const allbus = await this.busModel.find();
        return allbus;
    }

    async create(createBusDto: CreateBusDto): Promise<Bus> {
        const newBus = await this.busModel.create(createBusDto);
        return newBus;
    }

    async findById(id: string): Promise<Bus> {
        const bus = await this.busModel.findById(id);
        if(!bus){
            throw new NotFoundException('bus not found!!');
        }
        return bus;
    }

    async updateById(id: string, updateBusDto: UpdateBusDto): Promise<Bus> {
        return await this.busModel.findByIdAndUpdate(id, updateBusDto, {
            new: true,
            runValidators: true,
        });
    }

    async deleteById(id: string): Promise<Bus> {
        return await this.busModel.findByIdAndDelete(id);
    }
}
