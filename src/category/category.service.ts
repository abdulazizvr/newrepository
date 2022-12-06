import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Category } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoryDto } from './dto/category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
    constructor(private prismaService:PrismaService) { }

    async getAll():Promise<Category[]>{
        return this.prismaService.category.findMany()
    }

    async getOne(id:number) : Promise<Category> {
    
        return this.prismaService.category.findUnique({
            where:{
                id:+id
            }
        })
    }

    async create(createcategoryDto:CreateCategoryDto) {
        const category = await this.prismaService.category.create({
            data: {
               name:createcategoryDto.name
            },
          });
        return category
    }

    async update(id:number,updatecategoryDto:UpdateCategoryDto) {
        const check = await this.prismaService.category.findUnique({
            where:{
                id:+id
            }
        })
        if(!check) throw new HttpException(
            "Invalid id",
            HttpStatus.BAD_REQUEST
        )
        const category = await this.prismaService.category.update({
            where: {
              id:+id,
            },
            data: {
              name: updatecategoryDto.name,
            },
        })
        if(!category) throw new HttpException(
            "Error during save update",
            HttpStatus.NOT_FOUND
        )
        return {
            status:200,
            message:"Everything is OK"
        }
    }

    async remove(id:number):Promise<Boolean>{
        const category =  await this.prismaService.category.delete({
            where: {
              id: +id,
            },
          })
        
        if(!category) throw new HttpException(
            "ID is invalid",
            HttpStatus.BAD_REQUEST
        )
        return true
    }
}
