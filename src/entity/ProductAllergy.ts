import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  OneToMany,
  ManyToMany,
  JoinTable,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import {
  Contains,
  IsInt,
  Length,
  IsEmail,
  IsFQDN,
  IsDate,
  Min,
  Max,
  min,
  Matches,
} from "class-validator";
import { Allergy } from "./Allergy";
import { Product } from "./Product";

@Entity()
export class ProductAllergy {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => Allergy, (allergy) => allergy.productAllergies)
  allergy: Allergy;

  @ManyToOne((type) => Product, (product) => product.productAllergies)
  product: Product;
}
