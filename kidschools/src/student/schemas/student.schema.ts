import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document, Mongoose } from "mongoose";

export enum Status {
    ACTIVE = 'active',
    DRAFT = 'draft'
}

export enum Gender {
    BOY = 'boy',
    GIRL = 'girl'
}

@Schema({
    timestamps: true,
})

export class Student extends Document {
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'School'})
    school_id: string;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Branch'})
    branch_id: string;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Class'})
    class_id: string;

    @Prop()
    code: string;

    @Prop()
    name: string;

    @Prop()
    birthday: Date;

    @Prop()
    gender: Gender;

    @Prop()
    address: string;

    @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]})
    parent_id: string[];

    @Prop()
    status: Status;
}

export const StudentSchema = SchemaFactory.createForClass(Student);