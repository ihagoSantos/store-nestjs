import { Controller, Post, Get, Body } from '@nestjs/common';
import { CreateProductDto } from 'src/product/dto/createProduct.dto';
import { ProductRepository } from './product.repository';

@Controller('/product')
export class ProductController {
  constructor(private readonly productRepository: ProductRepository) {}

  @Post()
  async createProduct(@Body() createProductDto: CreateProductDto) {
    return this.productRepository.createProduct(createProductDto);
  }

  @Get()
  async listProducts() {
    return this.productRepository.listProducts();
  }
}
