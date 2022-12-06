import {IsString,IsNumber, IsOptional} from 'class-validator'
export class updateProductDto {
    @IsOptional()
    @IsString()
    readonly product_model: string;
    @IsOptional()
    @IsString()
    readonly product_name: string;
    @IsOptional()
    @IsString()
    readonly color :string;
    @IsOptional()
    @IsString()
    readonly price:number
    @IsOptional()
    @IsString()
    readonly subcategory_id:number
}