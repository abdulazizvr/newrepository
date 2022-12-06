import { Injectable,HttpException,HttpStatus } from '@nestjs/common';
import { SubCategory } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { createSubcategoryDto } from './dto/create-subcategory.dto';
import { updateSubcategoryDto } from './dto/update-subcategory.dto';

@Injectable()
export class SubcategoryService {
    constructor(private prismaservice:PrismaService) { }
    
    async getAll():Promise<SubCategory[]>{
        return  await this.prismaservice.subCategory.findMany()
    }

    async getOne(id:number):Promise<SubCategory> {
        return await this.prismaservice.subCategory.findUnique({
            where:{
                id:id
            }
        })
    }

    async create(createsubcategoryDto:createSubcategoryDto):Promise<SubCategory> {
        return await this.prismaservice.subCategory.create({
            data:{
                category_id:createsubcategoryDto.category_id,
                sub_category_name:createsubcategoryDto.sub_category_name
            }
        })
    }

    async update(id:number,updatesubcategoryDto:updateSubcategoryDto){
        const check = await this.prismaservice.subCategory.findUnique({
            where:{
                id:id
            }
        })
        if(!check) throw new HttpException(
            "Invalid id ",
            HttpStatus.NOT_FOUND
        )
        return this.prismaservice.subCategory.update({
            where:{
                id:id
            },
            data:{
                category_id:updatesubcategoryDto.category_id || check.category_id,
                sub_category_name: updatesubcategoryDto.sub_category_name || check.sub_category_name
            }
        })
    }

    async remove(id:number) {
        return await this.prismaservice.subCategory.delete({
            where:{
                id:id
            }
        })
    }

}
