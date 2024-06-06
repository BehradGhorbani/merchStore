import { Controller, Get, Post, Body, Param, UseGuards, Req, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { AuthGuard } from '../auth/guards/auth-guard.service';
import { Request } from 'express';
import { ApiBearerAuth, ApiProperty, ApiQuery } from '@nestjs/swagger';
import { GetProductsDto } from './dto/get-products.dto';

@UseGuards(AuthGuard)
@ApiBearerAuth()
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto, @Req() req: Request) {
    return this.productsService.create({ ...createProductDto, userId: req['user'].id });
  }

  @Get('list')
  @ApiQuery({name: 'from', required: false})
  @ApiQuery({name: 'to', required: false})

  findAll(@Query('from') from: string,
          @Query('to') to: string) {

    return this.productsService.findAll({
      from: from ? parseInt(from) : 0,
      to: to ? parseInt(to) : 10,
    });
  }

  @Get()
  @ApiQuery({name: 'from', required: false})
  @ApiQuery({name: 'to', required: false})

  findAllUserProducts(
    @Req() req: Request,
    @Query('from') from: string,
    @Query('to') to: string,
  ) {

    return this.productsService.findAllUserProducts({
      userId: req['user'].id,
      from: from ? parseInt(from) : 0,
      to: to ? parseInt(to) : 10,
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string,
          @Req() req: Request) {

    return this.productsService.findOne(parseInt(id), req['user'].id);
  }
}
