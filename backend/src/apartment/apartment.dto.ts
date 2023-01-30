import { IsInt, IsString, MaxLength, Min } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateApartmentDto {
  @IsInt()
  @Min(0)
  readonly rooms: number;

  @IsInt()
  @Min(0)
  readonly price: number;

  @IsString()
  @MaxLength(98)
  readonly name: string;

  @IsString()
  @MaxLength(98)
  readonly description: string;
}

export class UpdateApartmentDto extends PartialType(CreateApartmentDto) {}
