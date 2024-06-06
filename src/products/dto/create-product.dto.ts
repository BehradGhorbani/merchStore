import { IsString } from 'class-validator';
import { Exclude } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty()
  userId: string

  @ApiProperty()
  @IsString()
  title: string

  @ApiProperty()
  @IsString()
  description: string
}
