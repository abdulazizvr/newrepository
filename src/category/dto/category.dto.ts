import { IsString} from 'class-validator'
export class CreateCategoryDto {
    @IsString({message:"Name string bo'lishi kerak!"})
    readonly name:string;
}