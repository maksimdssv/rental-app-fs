import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ApartmentService } from './apartment.service';
import { CreateApartmentDto, UpdateApartmentDto } from './apartment.dto';

@Controller('apartments')
export class ApartmentController {
  constructor(private readonly apartmentService: ApartmentService) {}

  @Get()
  getAll() {
    return this.apartmentService.findAll();
  }
  @Post()
  create(@Body() apartmentDto: CreateApartmentDto) {
    return this.apartmentService.create(apartmentDto);
  }
  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.apartmentService.findOne(id);
  }
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() apartmentDto: UpdateApartmentDto,
  ) {
    return this.apartmentService.update(id, apartmentDto);
  }
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.apartmentService.delete(id);
  }
}
