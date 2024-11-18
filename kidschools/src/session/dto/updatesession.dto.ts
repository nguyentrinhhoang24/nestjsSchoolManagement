import { IsString, IsOptional, IsEnum, IsNotEmpty, IsDate } from 'class-validator';
import { Status } from '../schemas/session.schema';
import { Type } from 'class-transformer';

export class UpdateSessionDto {

  @IsString()
  @IsOptional()
  readonly school_id: string;

  @IsString()
  @IsOptional()
  readonly branch_id: string;

  @IsString()
  @IsOptional()
  readonly code: string;

  @IsString()
  @IsOptional()
  readonly title: string;

  @IsOptional()
  @IsDate()
  readonly start_date: Date;

  @IsOptional()
  @IsDate()
  readonly end_date: Date;

  @IsEnum(Status, { message: 'Please enter correct status.' })
  @IsOptional()
  readonly status: Status;
}