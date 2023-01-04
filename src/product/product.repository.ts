import { Injectable } from '@nestjs/common';
import { CreateProductDto } from 'src/product/dto/createProduct.dto';

@Injectable()
export class ProductRepository {
  private products: CreateProductDto[] = [];

  async createProduct(createProductDto: CreateProductDto) {
    return this.products.push(createProductDto);
  }

  async listProducts() {
    return this.products;
  }
}
