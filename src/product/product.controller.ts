import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateProductDto } from 'src/product/dto/createProduct.dto';
import { UpdateProductDto } from './dto/updateProduct.dto';
import { ProductFeatureEntity } from './product-feature.entity';
import { ProductImageEntity } from './product-image.entity';
import { ProductEntity } from './product.entity';
import { ProductRepository } from './product.repository';

@Controller('/product')
export class ProductController {
  constructor(private readonly productRepository: ProductRepository) {}

  @Post()
  async createProduct(@Body() createProductDto: CreateProductDto) {
    const product = await this.productRepository.createProduct(
      createProductDto,
    );

    return {
      product,
      message: 'product created successfully',
    };
  }

  @Get()
  async listProducts() {
    return this.productRepository.listProducts();
  }

  @Put('/:id')
  async updateProduct(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    const product = await this.productRepository.updateProduct(
      id,
      updateProductDto,
    );
    return {
      product,
      message: 'product updated successfully',
    };
  }

  @Delete('/:id')
  async deleteProduct(@Param('id') id: string) {
    await this.productRepository.deleteProduct(id);
    return {
      message: 'product deleted successfully',
    };
  }
}
