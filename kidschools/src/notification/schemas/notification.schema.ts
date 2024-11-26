import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";

export enum TypeSend {
    ALL = 'all',
    TEACHER = 'teacher',
    PARENT = 'parent'
}

@Schema({
    timestamps: true,
})

export class Notification extends Document {

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'School'})
    school_id: string;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Branch'})
    branch_id: string;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Class'})
    send_to_class: string;

    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    type: TypeSend;
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);