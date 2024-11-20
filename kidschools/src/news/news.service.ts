import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { News } from './schemas/news.schema';
import { CreateNewsDto } from './dto/createnews.dto';
import { UpdateNewsDto } from './dto/updatenews.dto';

@Injectable()
export class NewsService {
    constructor(@InjectModel('news') private newsModel: Model<News>) {}

    async findAll(): Promise<News[]> {
        const news = await this.newsModel.find();
        return news;
     }
    
      async create(createNewsDto: CreateNewsDto): Promise<News> {
        const news = await this.newsModel.create(createNewsDto);
        return news;
      }
    
      async findById(id: string): Promise<News> {
        const news = await this.newsModel.findById(id);
        if (!news) {
          throw new NotFoundException('News not found.');
        }
        return news;
      }
    
      async updateById(id: string, updateNewsDto: UpdateNewsDto): Promise<News> {
        return await this.newsModel.findByIdAndUpdate(id, updateNewsDto, {
          new: true,
          runValidators: true,
        });
      }
    
      async deleteById(id: string): Promise<News> {
        return await this.newsModel.findByIdAndDelete(id);
      }
    
}
