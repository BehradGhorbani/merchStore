import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';
import { Repository } from 'typeorm';
import { GetProductsDto } from './dto/get-products.dto';

@Injectable()
export class ProductsService {
  constructor(@InjectRepository(ProductEntity) private productRepository: Repository<ProductEntity>) {
  }

  async create(param: CreateProductDto): Promise<ProductEntity> {
    return await this.productRepository.save(param);
  }

  async findAll(param: GetProductsDto): Promise<ProductEntity[]> {
    return await this.productRepository.find({
      order: { createdAt: 'DESC' },
      skip: param.from, take: param.to,
    });
  }

  async findAllUserProducts(param: GetProductsDto): Promise<ProductEntity[]> {
    return await this.productRepository.find({
      where: { userId: param.userId },
      order: { createdAt: 'DESC' },
      skip: param.from, take: param.to,
    });
  }

  async findOne(id: number, userId: string): Promise<ProductEntity> {
    return await this.productRepository.findOneBy({id, userId});
  }
}
