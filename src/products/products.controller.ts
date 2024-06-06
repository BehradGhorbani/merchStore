import { Controller, Get, Post, Body, Param, UseGuards, Req, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { AuthGuard } from '../auth/guards/auth-guard.service';
import { Request } from 'express';

@UseGuards(AuthGuard)
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto, @Req() req: Request) {
    return this.productsService.create({ ...createProductDto, userId: req['user'].id });
  }

  @Get('list')
  findAll(@Query('from') from: string,
          @Query('to') to: string) {

    return this.productsService.findAll({
      from: from ? parseInt(from) : 0,
      to: to ? parseInt(to) : 10,
    });
  }

  @Get()
  findAllUserProducts(
    @Query('from') from: string,
    @Query('to') to: string,
    @Req() req: Request) {

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
