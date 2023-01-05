import { Type } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  ValidateNested,
  IsArray,
  IsUUID,
  IsOptional,
} from 'class-validator';
import { UserExists } from 'src/user/validation/user-exists-with_id.validator';

import { ProductFeatureDto } from './productFeature.dto';
import { ProductImageDto } from './productImage.dto';

export class UpdateProductDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  value: number;

  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  quantityAvaliable: number;

  @IsString()
  @IsOptional()
  description: string;

  @ValidateNested()
  @IsArray()
  @Type(() => ProductFeatureDto)
  @IsOptional()
  feature: ProductFeatureDto[];

  @ValidateNested()
  @IsArray()
  @Type(() => ProductImageDto)
  @IsOptional()
  images: ProductImageDto[];

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  category: string;

  @IsUUID()
  @IsNotEmpty()
  @UserExists({ message: 'user does not exists' })
  @IsOptional()
  userId: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  created_at: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  updated_at: string;
}
