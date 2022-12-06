import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
    constructor(private prismaService:PrismaService) { }

    async getAll():Promise<Product[]>{
        return await this.prismaService.product.findMany()
    }
    
    async getOne(id:number): Promise<Product> {
        return await this.prismaService.product.findUnique({
            where:{
                id:id
            }
        })
    }

    async remove(id:number):Promise<Product> {
        return await this.prismaService.product.delete({
            where:{
                id:id
            }
        }) 
    }

    async update(id:number):Promise<Product>{
        return await this.prismaService.product.update
    }
}
