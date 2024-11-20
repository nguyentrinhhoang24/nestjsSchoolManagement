import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AlbumSchema } from './schemas/album.schema';
import { AlbumController } from './album.controller';
import { AlbumService } from './album.service';

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'album', schema: AlbumSchema}]),
    ],
    controllers: [AlbumController],
    providers: [AlbumService],
    exports: [AlbumService],
})
export class AlbumModule {}
