import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Invoice } from './schemas/invoice.schema';
import { CreateInvoiceDto } from './dto/createinvoice.dto';
import { UpdateInvoiceDto } from './dto/updateinvoice.dto';

@Injectable()
export class InvoiceService {
    constructor(@InjectModel('invoice') private invoiceModel: Model<Invoice>) {}

    async findAll(): Promise<Invoice[]> {
        const invoices = await this.invoiceModel.find();
        return invoices;
    }
    
    async create(createInvoiceDto: CreateInvoiceDto): Promise<Invoice> {
        const newInvoice = await this.invoiceModel.create(createInvoiceDto);
        return newInvoice;
    }

    async findById(id: string): Promise<Invoice> {
        const invoice = await this.invoiceModel.findById(id);
        if(!invoice) {
            throw new NotFoundException('invoice not found!');
        }
        return invoice;
    }

    async updateById(id: string, updateInvoiceDto: UpdateInvoiceDto): Promise<Invoice> {
        return await this.invoiceModel.findByIdAndUpdate(id, updateInvoiceDto, {
            new: true,
            runValidators: true,
        });
    }

    async deleteById(id: string): Promise<Invoice> {
        return await this.invoiceModel.findByIdAndDelete(id);
    }
}
