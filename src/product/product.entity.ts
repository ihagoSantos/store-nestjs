import { ProductFeatureEntity } from './product-feature.entity';
import { ProductImageEntity } from './product-image.entity';

export class ProductEntity {
  id: string;
  name: string;
  value: number;
  quantityAvaliable: number;
  description: string;
  feature: ProductFeatureEntity[];
  images: ProductImageEntity[];
  category: string;
  userId: string;
  created_at: string;
  updated_at: string;

  constructor(
    id: string,
    name: string,
    value: number,
    quantityAvaliable: number,
    description: string,
    feature: ProductFeatureEntity[],
    images: ProductImageEntity[],
    category: string,
    userId: string,
    created_at: string,
    updated_at: string,
  ) {
    this.id = id;
    this.name = name;
    this.value = value;
    this.quantityAvaliable = quantityAvaliable;
    this.description = description;
    this.feature = feature;
    this.images = images;
    this.category = category;
    this.userId = userId;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
