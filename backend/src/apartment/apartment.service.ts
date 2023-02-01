import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Apartment } from './apartment.entity';
import { ApartmentDto } from './apartment.dto';
import { FindOptions } from 'sequelize';

@Injectable()
export class ApartmentService {
  constructor(
    @InjectModel(Apartment) private apartmentModel: typeof Apartment,
  ) {}
  async findAll(rooms?: string, price?: 'asc' | 'desc') {
    const query: FindOptions<Apartment> = {};
    if (rooms) query['where'] = { rooms };
    if (price) query['order'] = [['price', price]];
    return this.apartmentModel.findAll({ ...query });
  }

  async findOne(id: number): Promise<Apartment> {
    const apartment = await this.apartmentModel.findByPk(id);
    if (!apartment) throw new BadRequestException('Apartment does not exist');
    return apartment;
  }

  async create(apartment: ApartmentDto): Promise<Apartment> {
    return this.apartmentModel.create(apartment);
  }

  async update(id: number, apartment: ApartmentDto): Promise<string> {
    const updatedAmount = await this.apartmentModel.update(
      { ...apartment },
      {
        where: {
          id,
        },
      },
    );
    if (updatedAmount[0] === 0)
      throw new BadRequestException('Apartment does not exist');
    return `Successfully updated apartment with ID ${id}`;
  }

  async delete(id: number): Promise<void> {
    const deletedAmount = await this.apartmentModel.destroy({ where: { id } });
    if (deletedAmount === 0)
      throw new BadRequestException('Apartment does not exist');
    return;
  }
}
