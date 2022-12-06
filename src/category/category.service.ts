import { Injectable } from '@nestjs/common';
import { Category } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoryDto } from './dto/category.dto';

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

    async update(updatecategoryDto)
}
