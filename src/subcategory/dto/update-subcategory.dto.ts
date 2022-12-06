import {IsString,IsNumber, IsOptional} from "class-validator"
export class updateSubcategoryDto {
    @IsString()
    readonly sub_category_name:string;
    @IsOptional()
    @IsNumber()
    readonly category_id:number;
}