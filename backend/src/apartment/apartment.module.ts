import { Module } from '@nestjs/common';
import { ApartmentController } from './apartment.controller';
import { ApartmentService } from './apartment.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Apartment } from './apartment.entity';

@Module({
  imports: [SequelizeModule.forFeature([Apartment])],
  controllers: [ApartmentController],
  providers: [ApartmentService],
})
export class ApartmentModule {}
