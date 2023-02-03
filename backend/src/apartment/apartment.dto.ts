import { IsInt, IsString, MaxLength, Min, MinLength } from 'class-validator';

export class ApartmentDto {
  @IsInt()
  @Min(0)
  readonly rooms: number;

  @IsInt()
  @Min(0)
  readonly price: number;

  @IsString()
  @MinLength(1)
  @MaxLength(98)
  readonly name: string;

  @IsString()
  @MaxLength(998)
  readonly description: string;
}
