import { IsString} from 'class-validator'
export class UpdateCategoryDto {
    @IsString({message:"Name string bo'lishi kerak!"})
    readonly name:string;
}