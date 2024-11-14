import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export enum Status {
  ACTIVE = 'active',
  DRAFT = 'draft'
}

@Schema({
  timestamps: true,
})

export class Branch extends Document {

  @Prop()
  school_id: string;

  @Prop()
  code: string;
  
  @Prop()
  name: string;
  
  @Prop()
  address: string;

  @Prop()
  status: Status;
  

}

export const BranchSchema = SchemaFactory.createForClass(Branch);