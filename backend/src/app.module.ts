import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApartmentModule } from './apartment/apartment.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { development } from '../config/development';
import { Apartment } from './apartment/apartment.entity';

@Module({
  imports: [
    ApartmentModule,
    SequelizeModule.forRoot({
      ...development,
      autoLoadModels: true,
      models: [Apartment],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
