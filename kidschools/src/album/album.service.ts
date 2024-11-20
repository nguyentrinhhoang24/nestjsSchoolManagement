import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Album } from './schemas/album.schema';
import { CreateAlbumDto } from './dto/createalbum.dto';
import { UpdateAlbumDto } from './dto/updatealbum.dto';

@Injectable()
export class AlbumService {
    constructor(@InjectModel('album') private albumModel: Model<Album>) {}

    async findAll(): Promise<Album[]> {
        const albums = await this.albumModel.find();
        return albums;
    }

    async create(createAlbumDto: CreateAlbumDto): Promise<Album> {
        const newAlbum = await this.albumModel.create(createAlbumDto);
        return newAlbum;
    }

    async findById(id: string): Promise<Album> {
        const album = await this.albumModel.findById(id);
        if(!album) {
            throw new NotFoundException('album not found!')
        }
        return album;
    }

    async updateById(id: string, updateAlbumDto: UpdateAlbumDto): Promise<Album> {
        return await this.albumModel.findByIdAndUpdate(id, updateAlbumDto, {
            new: true,
            runValidators: true,
        });

    }

    async deleteById(id: string): Promise<Album> {
        return await this.albumModel.findByIdAndDelete(id);
    }
}
