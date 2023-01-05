import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateProductDto } from 'src/product/dto/createProduct.dto';
import { UpdateProductDto } from './dto/updateProduct.dto';
import { ProductFeatureEntity } from './product-feature.entity';
import { ProductImageEntity } from './product-image.entity';
import { ProductEntity } from './product.entity';

@Injectable()
export class ProductRepository {
  private products: ProductEntity[] = [];

  async createProduct(
    createProductDto: CreateProductDto,
  ): Promise<ProductEntity> {
    const productFeatureArray = createProductDto.feature.map((feature) => {
      return new ProductFeatureEntity(feature.name, feature.description);
    });
    const productImageArray = createProductDto.images.map((image) => {
      return new ProductImageEntity(image.url, image.description);
    });
    const productEntity = new ProductEntity(
      randomUUID(),
      createProductDto.name,
      createProductDto.value,
      createProductDto.quantityAvaliable,
      createProductDto.description,
      productFeatureArray,
      productImageArray,
      createProductDto.category,
      createProductDto.userId,
      createProductDto.created_at,
      createProductDto.updated_at,
    );
    this.products.push(productEntity);
    return productEntity;
  }

  async listProducts(): Promise<ProductEntity[]> {
    return this.products;
  }

  async updateProduct(id: string, updateProductData: Partial<ProductEntity>) {
    const possibleProduct = this.products.find((product) => product.id === id);

    if (!possibleProduct) {
      throw new Error('Product not found');
    }
    Object.entries(updateProductData).forEach(([key, value]) => {
      if (key === 'id') {
        return;
      }

      possibleProduct[key] = value;
    });

    return possibleProduct;
  }

  async deleteProduct(id: string) {
    const possibleProductIndex = this.products.findIndex(
      (product) => product.id === id,
    );

    if (possibleProductIndex === -1) {
      throw new Error('Product not found');
    }

    this.products.splice(possibleProductIndex, 1);
  }
}
