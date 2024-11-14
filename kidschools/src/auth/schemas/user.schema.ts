import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Role } from '../enums/role.enum';


export enum Gender {
    MALE = 'male',
    FEMALE = 'female'
  }

@Schema({
  timestamps: true,
})
export class User extends Document {
  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'School'})
  school_id: string;

  @Prop()
  branch_id: string;

  @Prop()
  class_id: string;

  @Prop()
  bus_id: string;

  @Prop()
  student_id: string[];

  @Prop()
  name: string;

  @Prop()
  phone: string;

  @Prop()
  address: string;

  @Prop()
  birthday: Date;

  @Prop({type: [{type: String, enum: Gender}],})
  gender: Gender[];

  @Prop()
  image: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop({type: String, enum: Role})
  role: Role;

}

export const UserSchema = SchemaFactory.createForClass(User);