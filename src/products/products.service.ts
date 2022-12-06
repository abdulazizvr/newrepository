import { Injectable,HttpException,HttpStatus } from '@nestjs/common';
import { Product } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { createProductDto } from './dto/createproduct.dto';
import { updateProductDto } from './dto/update-category.dto';

@Injectable()
export class ProductsService {
    constructor(private prismaService:PrismaService) { }

    async getAll():Promise<Product[]>{
        return await this.prismaService.product.findMany()
    }
    
    async getOne(id:number): Promise<Product> {
        return await this.prismaService.product.findUnique({
            where:{
                id:+id
            }
        })
    }

    async remove(id:number):Promise<Product> {
        return await this.prismaService.product.delete({
            where:{
                id:+id
            }
        }) 
    }

    async update(id:number,updateproductdto:updateProductDto):Promise<Product>{
        const check = await this.prismaService.product.findUnique({
            where:{
                id:+id
            }
        })
        if(!check) throw new HttpException(
            "Invalid id ",
            HttpStatus.NOT_FOUND
            )
        return this.prismaService.product.update({
            where:{
                id:+id
            },
            data:{
                product_model:updateproductdto.product_model || check.product_model,
                product_name:updateproductdto.product_name || check.product_name,
                color:updateproductdto.color || check.color,
                price:updateproductdto.price || check.price,
                subcategory_id:updateproductdto.subcategory_id || check.subcategory_id
            }
        })
    }

    async create(createProductdto:createProductDto){
        return await this.prismaService.product.create({
            data:{
                product_model:createProductdto.product_model,
                product_name:createProductdto.product_name,
                color:createProductdto.color,
                price:createProductdto.price,
                subcategory_id:createProductdto.subcategory_id
            }
        })
    }

    async getProductByQuery(data:object,newId:number){
          return this.prismaService.product.findUnique({
            where:{
                id:newId
            }
        })
        
    }
}
