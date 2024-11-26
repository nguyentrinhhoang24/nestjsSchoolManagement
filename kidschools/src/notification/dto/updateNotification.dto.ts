import { IsString, IsOptional, IsEnum, IsNotEmpty, IsArray } from 'class-validator';
import { TypeSend } from '../schemas/notification.schema';

export class UpdateNotificationDto {
    @IsString()
    @IsOptional()
    school_id: string;

    @IsString()
    @IsOptional()
    branch_id: string;

    @IsString()
    @IsOptional()
    send_to_class: string;

    @IsString()
    @IsOptional()
    title: string;

    @IsString()
    @IsOptional()
    description: string;

    @IsString()
    @IsEnum(TypeSend, { message: 'Please enter correct send type.' })
    @IsOptional()
    type: TypeSend;
}