import { IsNotEmpty, IsString } from 'class-validator';

export class ProductFeatureDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
