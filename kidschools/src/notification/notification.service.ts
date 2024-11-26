import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateNotificationDto } from './dto/createNotification.dto';
import { UpdateNotificationDto } from './dto/updateNotification.dto';

@Injectable()
export class NotificationService {
    constructor(@InjectModel('Notification') private notificationModel: Model<Notification>) {}

    async findAll(): Promise<Notification[]> {
        const notifications = await this.notificationModel.find();
        return notifications;
      }
    
      async create(createNotificationDto: CreateNotificationDto): Promise<Notification> {
        const newNotification = await this.notificationModel.create(createNotificationDto);
        return newNotification;
      }
    
      async findById(id: string): Promise<Notification> {
        const notification = await this.notificationModel.findById(id);
        if (!notification) {
          throw new NotFoundException('Notification not found.');
        }
        return notification;
      }
    
      async updateById(id: string, updateNotificationDto: UpdateNotificationDto): Promise<Notification> {
        return await this.notificationModel.findByIdAndUpdate(id, updateNotificationDto, {
          new: true,
          runValidators: true,
        });
      }
    
      async deleteById(id: string): Promise<Notification> {
        return await this.notificationModel.findByIdAndDelete(id);
      }
    
}
