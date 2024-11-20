import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AlbumService } from './album.service';
import { Album } from './schemas/album.schema';
import { CreateAlbumDto } from './dto/createalbum.dto';
import { UpdateAlbumDto } from './dto/updatealbum.dto';

@Controller('album')
export class AlbumController {
    constructor(private readonly albumService: AlbumService) {}

    @Get()
    async getAllAlbum(): Promise<Album[]> {
        return this.albumService.findAll();
    }

    @Post()
    async createAlbum(@Body() createAlbumDto: CreateAlbumDto): Promise<Album> {
        return this.albumService.create(createAlbumDto);
    }

    @Get(':id')
    async getAlbum(@Param('id') id: string): Promise<Album> {
        return this.albumService.findById(id);
    }

    @Put(':id')
    async updateAlbum(@Param('id') id: string, @Body() updateAlbumDto: UpdateAlbumDto): Promise<Album> {
        return this.albumService.updateById(id, updateAlbumDto);
    }

    @Delete(':id')
    async deleteALbum(@Param('id') id: string): Promise<Album> {
        return this.albumService.deleteById(id);
    }

}
