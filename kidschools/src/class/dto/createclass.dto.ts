import { IsString, IsOptional, IsEnum, IsNotEmpty } from 'class-validator';
import { Status } from '../schemas/class.schema';

export class CreateClassDto {

  @IsString()
  @IsOptional()
  readonly branch_id: string;

  @IsString()
  @IsOptional()
  readonly classgroup_id: string;
  
  @IsString()
  @IsOptional()
  readonly session_id: string;

  @IsString()
  @IsOptional()
  readonly user_id: string;

  @IsString()
  @IsOptional()
  readonly code: string;

  @IsString()
  @IsOptional()
  readonly name: string;

  @IsString()
  @IsOptional()
  readonly age: number;

  @IsEnum(Status, { message: 'Please enter correct status.' })
  @IsOptional()
  readonly status: Status;
}