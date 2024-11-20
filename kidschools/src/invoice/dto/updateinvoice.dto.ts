import { Type } from "class-transformer";
import { IsString, IsNumber, IsEnum, IsDate, IsOptional } from "class-validator";
import { PayMethod } from "../schemas/invoice.schema";

export class UpdateInvoiceDto {
    
    @IsString()
    @IsOptional()
    school_id: string;

    @IsString()
    @IsOptional()
    branch_id: string;

    @IsString()
    @IsOptional()
    class_id: string;

    @IsString()
    @IsOptional()
    student_id: string;

    @IsString()
    @IsOptional()
    title: string;

    @IsDate()
    @Type(() => Date)
    @IsOptional()
    payment_deadline: Date;

    @IsString()
    @IsEnum(PayMethod, {message: 'Please enter  correct payment method'})
    @IsOptional()
    payment_method: PayMethod;

    @IsString()
    @IsOptional()
    description: string;

    @IsString()
    @IsOptional()
    feeitem_id: string[];

    @IsNumber()
    @IsOptional()
    readonly total?: number;
}