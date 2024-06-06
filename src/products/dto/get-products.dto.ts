import { IsNumber, IsOptional, IsString } from 'class-validator';

export class GetProductsDto {
  @IsString()
  @IsOptional()
  userId?: string

  @IsNumber()
  from: number

  @IsNumber()
  to: number
}
