import { Controller,Get,Put,Post,Delete,Query,Param,Body } from '@nestjs/common';
import { createProductDto } from './dto/createproduct.dto';
import { updateProductDto } from './dto/update-category.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService:ProductsService) { }

    // @Get()
    // getAll(){
    //     console.log(2)
    //     return this.productsService.getAll()
    // }

    /// products?categoryId=1
    @Get()
    getQuery(@Query() data:object){
        let newId:any;
        Object.entries(data).forEach(([key, value]) => {
            if(isNaN(Number(value)) == false ){
                newId = Number(value)
            }
          });
    
        return this.productsService.getProductByQuery(data,+newId)
    }

    // @Get('/:id')
    // getOne(@Param('id') id:number){
    //     return this.productsService.getOne(id)
    // }

    @Post()
    create(@Body() createproductdto:createProductDto){
        return this.productsService.create(createproductdto)
    }

    @Put('/:id')
    update(@Param('id') id:number,@Body() updateProductdto:updateProductDto){
        return this.productsService.update(id,updateProductdto)
    }

    @Delete('/:id')
    remove(@Param('id') id:number){
        return this.productsService.remove(id)
    }

}
