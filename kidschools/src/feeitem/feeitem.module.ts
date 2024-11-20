import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FeeItemSchema } from './schemas/feeitem.schema';
import { FeeItemController } from './feeitem.controller';
import { FeeItemService } from './feeitem.service';

@Module({
    imports: [MongooseModule.forFeature([{name: 'feeitem', schema: FeeItemSchema}])],
    controllers: [FeeItemController],
    providers: [FeeItemService],
    exports: [FeeItemService],
})
export class FeeItemModule {}
