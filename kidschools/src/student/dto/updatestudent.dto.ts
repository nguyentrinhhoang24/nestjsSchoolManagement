import { Type } from "class-transformer";
import { IsDate, IsEnum, IsOptional, IsString } from "class-validator";
import { Gender, Status } from "../schemas/student.schema";

export class UpdateStudentDto {
    @IsString()
    @IsOptional()
    readonly school_id: string;

    @IsString()
    @IsOptional()
    readonly branch_id: string;

    @IsString()
    @IsOptional()
    readonly class_id: string;

    @IsString()
    @IsOptional()
    readonly code: string;

    @IsString()
    @IsOptional()
    readonly name: string;

    @IsDate()
    @Type(() => Date)
    @IsOptional()
    readonly birthday: Date;

    @IsString()
    @IsEnum(Gender, { message: 'Please enter correct gender.' })
    @IsOptional()
    readonly gender: Gender;

    @IsString()
    @IsOptional()
    readonly address: string;

    @IsString()
    @IsOptional()
    readonly parent_id: string[];

    @IsString()
    @IsEnum(Status, { message: 'Please enter correct status.' })
    @IsOptional()
    readonly status: Status;
}