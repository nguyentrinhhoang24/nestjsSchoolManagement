import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Menu } from "./schemas/menu.schema";
import { CreateMenuDto } from "./dto/createmenu.dto";
import { UpdateMenuDto } from "./dto/updatemenu.dto";
import { Model } from "mongoose";

@Injectable()
export class MenuService {
    constructor(@InjectModel('menu') private menuModel: Model<Menu>) {}

    async findAll(): Promise<Menu[]> {
        const menu = await this.menuModel.find();
        return menu;
    }

    async create(createMenuDto: CreateMenuDto): Promise<Menu> {
        const newFood = await this.menuModel.create(createMenuDto);
        return newFood;
    }

    async findById(id: string): Promise<Menu> {
        const menu = await this.menuModel.findById(id);
        if(!menu){
            throw new NotFoundException('menu not found');
        }
        return menu;
    }

    async updateById(id: string, updateMenuDto: UpdateMenuDto): Promise<Menu> {
        return await this.menuModel.findByIdAndUpdate(id, updateMenuDto, {
            new: true,
            runValidators: true,
        });
    }

    async deleteById(id: string): Promise<Menu> {
        return await this.menuModel.findByIdAndDelete(id);
    }
}