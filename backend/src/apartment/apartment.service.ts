import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Apartment } from './apartment.entity';
import { UpdateApartmentDto } from './apartment.dto';

@Injectable()
export class ApartmentService {
  constructor(
    @InjectModel(Apartment) private apartmentModel: typeof Apartment,
  ) {}
  async findAll(): Promise<Apartment[]> {
    return this.apartmentModel.findAll();
  }

  async findOne(id): Promise<Apartment> {
    const apartment = await this.apartmentModel.findByPk(id);
    if (!apartment) throw new BadRequestException('Apartment does not exist');
    return apartment;
  }

  async create(apartment): Promise<Apartment> {
    return this.apartmentModel.create(apartment);
  }

  async update(id: number, apartment: UpdateApartmentDto): Promise<string> {
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
