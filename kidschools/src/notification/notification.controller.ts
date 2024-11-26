import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { CreateNotificationDto } from './dto/createNotification.dto';
import { UpdateNotificationDto } from './dto/updateNotification.dto';

@Controller('notification')
export class NotificationController {
    constructor(private readonly notificationService: NotificationService){}

    @Get()
    async getAllNoti(): Promise<Notification[]> {
        return this.notificationService.findAll();
    }

    @Post()
    async createNoti(@Body() createNotificationDto: CreateNotificationDto): Promise<Notification> {
        return this.notificationService.create(createNotificationDto);
    }

    @Get(':id')
    async getNoti(@Param('id') id: string): Promise<Notification> {
        return this.notificationService.findById(id);
    }

    @Put(':id')
    async updateNoti(@Param('id') id: string, @Body() updateNotificationDto: UpdateNotificationDto): Promise<Notification> {
        return this.notificationService.updateById(id, updateNotificationDto);
    }

    @Delete(':id')
    async removeNoti(@Param('id') id: string): Promise<Notification> {
        return this.notificationService.deleteById(id);
    }
}
