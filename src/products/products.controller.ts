import { Controller,Get,Put,Post,Delete, } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService:ProductsService) { }

    @Get()
    getAll(){
        return this.productsService
    }

}
