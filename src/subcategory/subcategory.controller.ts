import { Controller, Get,Param,Body,Delete,Put,Post } from '@nestjs/common';
import { createSubcategoryDto } from './dto/create-subcategory.dto';
import { updateSubcategoryDto } from './dto/update-subcategory.dto';
import { SubcategoryService } from './subcategory.service';

@Controller('subcategory')
export class SubcategoryController {
    constructor(private readonly subcategoryService:SubcategoryService) { }

    @Get()
    getAll(){
        return this.subcategoryService.getAll()
    }

    @Get('/:id')
    getOne(@Param('id') id :number){
        return this.subcategoryService.getOne(+id)
    }

    @Put('/:id')
    update(@Param('id') id:number,@Body() updatesubcategoryDto:updateSubcategoryDto){
        return this.subcategoryService.update(+id,updatesubcategoryDto)
    }

    @Delete('/:id')
    remove(@Param('id') id:number){
        return this.subcategoryService.remove(+id)
    }

    @Post()
    create(@Body() createsubcategoryDto:createSubcategoryDto){
        return this.subcategoryService.create(createsubcategoryDto)
    }
}
