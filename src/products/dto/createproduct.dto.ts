import {IsString,IsNumber} from 'class-validator'
export class createProductDto {
    @IsString()
    readonly product_model: string;
    @IsString()
    readonly product_name: string;
    @IsString()
    readonly color :string;
    @IsString()
    readonly price:number
    @IsString()
    readonly subcategory_id:number
}