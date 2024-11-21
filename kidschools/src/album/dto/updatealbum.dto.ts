import { IsString, IsOptional, IsEnum } from "class-validator";
import { Status } from "../schemas/album.schema";

export class UpdateAlbumDto {
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
    readonly description: string;

    @IsString()
    @IsOptional()
    readonly images: string[];

    @IsString()
    @IsEnum(Status, {message: 'Please enter correct status!'})
    @IsOptional()
    readonly status: Status;
}