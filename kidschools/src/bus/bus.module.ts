import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BusSchema } from './schemas/bus.schema';
import { BusController } from './bus.controller';
import { BusService } from './bus.service';

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'bus', schema: BusSchema}]),
    ],
    controllers: [BusController],
    providers: [BusService],
    exports: [BusService],
})
export class BusModule {}
