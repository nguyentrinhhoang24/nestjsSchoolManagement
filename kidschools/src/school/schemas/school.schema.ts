import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from 'src/auth/schemas/user.schema';


export enum Status {
  ACTIVE = 'active',
  DRAFT = 'draft'
}

@Schema({
  timestamps: true,
})

export class School extends Document {
  @Prop()
  branch_id: string[];

  @Prop()
  classgroup_id: string[];

  @Prop()
  name: string;
  
  @Prop()
  address: string;
  
  @Prop()
  phone: string;
  
  @Prop()
  email: string;
  
  @Prop()
  principal_name: string;
  
  @Prop()
  description: string;
  
  @Prop()
  status: Status;
  
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

}

export const SchoolSchema = SchemaFactory.createForClass(School);