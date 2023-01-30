import { InferAttributes, InferCreationAttributes } from 'sequelize';
import { Column, Model, Table } from 'sequelize-typescript';

@Table({ timestamps: false })
export class Apartment extends Model<
  InferAttributes<Apartment>,
  InferCreationAttributes<Apartment>
> {
  @Column
  rooms: number;
  @Column
  price: number;
  @Column
  name: string;
  @Column
  description: string;
}
