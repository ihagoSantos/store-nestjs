import { Type } from 'class-transformer';
import {
  IsString,
  IsEmail,
  MinLength,
  IsNotEmpty,
  IsNumber,
  ValidateNested,
  IsArray,
  IsDate,
  IsUUID,
} from 'class-validator';
import { UserExists } from 'src/user/validation/user-exists-with_id.validator';

import { ProductFeatureDto } from './productFeature.dto';
import { ProductImageDto } from './productImage.dto';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  value: number;

  @IsNumber()
  @IsNotEmpty()
  quantityAvaliable: number;

  @IsString()
  description: string;

  @ValidateNested()
  @IsArray()
  @Type(() => ProductFeatureDto)
  feature: ProductFeatureDto[];

  @ValidateNested()
  @IsArray()
  @Type(() => ProductImageDto)
  images: ProductImageDto[];

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsUUID()
  @IsNotEmpty()
  @UserExists({ message: 'user does not exists' })
  userId: string;

  @IsString()
  @IsNotEmpty()
  created_at: string;

  @IsString()
  @IsNotEmpty()
  updated_at: string;
}
