import { IsString } from 'class-validator';
import { Exclude } from 'class-transformer';

export class CreateProductDto {
  userId: string

  @IsString()
  title: string

  @IsString()
  description: string
}
