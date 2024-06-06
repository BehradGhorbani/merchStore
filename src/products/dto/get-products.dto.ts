import { IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiQuery } from '@nestjs/swagger';

export class GetProductsDto {
  @IsString()
  @IsOptional()
  userId?: string

  @IsNumber()
  from: number

  @IsNumber()
  to: number
}
