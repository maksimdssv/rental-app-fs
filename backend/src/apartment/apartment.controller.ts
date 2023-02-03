import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApartmentService } from './apartment.service';
import { ApartmentDto } from './apartment.dto';

@Controller('apartments')
export class ApartmentController {
  constructor(private readonly apartmentService: ApartmentService) {}

  @Get()
  findAll(
    @Query('rooms') rooms: string,
    @Query('price') price: 'asc' | 'desc',
  ) {
    const roomsAmount = Number(rooms);
    if (price && price !== 'asc' && price !== 'desc')
      throw new BadRequestException('price must str asc or desc');
    if (rooms && (isNaN(roomsAmount) || roomsAmount < 1))
      throw new BadRequestException('rooms must be int bigger than 0');
    return this.apartmentService.findAll(rooms, price);
  }
  @Post()
  create(@Body() apartmentDto: ApartmentDto) {
    return this.apartmentService.create(apartmentDto);
  }
  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.apartmentService.findOne(id);
  }
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() apartmentDto: ApartmentDto,
  ) {
    return this.apartmentService.update(id, apartmentDto);
  }
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.apartmentService.delete(id);
  }
}
