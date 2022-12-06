import {IsString,IsNumber} from "class-validator"
export class createSubcategoryDto {
    @IsString()
    readonly sub_category_name:string;
    @IsNumber()
    readonly category_id:number;
}