import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NewsSchema } from './schemas/news.schema';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';

@Module({
    imports:[
        MongooseModule.forFeature([{name: 'news', schema: NewsSchema}]),
    ],
    controllers: [NewsController],
    providers: [NewsService],
    exports: [NewsService],
})
export class NewsModule {}
