import { Controller, Get, Injectable,Param,Post,Body } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/category.dto';

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService:CategoryService) {} 

    @Get()
    getAll(){
        return this.categoryService.getAll()
    }

    @Get('/:id')
    getOne(@Param('id') id:number) {
        return this.categoryService.getOne(id)
    }

    @Post()
    create(@Body() createCategorydto:CreateCategoryDto) {
        return this.categoryService.create(createCategorydto)
    }

}
