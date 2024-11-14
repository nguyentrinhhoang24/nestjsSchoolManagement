import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export enum Status {
  ACTIVE = 'active',
  DRAFT = 'draft'
}

@Schema({
  timestamps: true,
})

export class ClassGroup extends Document {

  @Prop()
  school_id: string;

  @Prop()
  branch_id: string;

  @Prop()
  class_id: string[];
  
  @Prop()
  title: string;
  
  @Prop()
  description: string;

  @Prop()
  status: Status;
  

}

export const ClassGroupSchema = SchemaFactory.createForClass(ClassGroup);