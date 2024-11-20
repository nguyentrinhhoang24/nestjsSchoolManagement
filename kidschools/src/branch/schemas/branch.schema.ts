import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';


export enum Status {
  ACTIVE = 'active',
  DRAFT = 'draft'
}

@Schema({
  timestamps: true,
})

export class Branch extends Document {

  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'School'})
  school_id: string;

  @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'ClassGroup'}]})
  classgroup_id: string[];

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