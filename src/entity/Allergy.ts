import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  OneToMany,
  ManyToMany,
  JoinTable,
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
import { Product } from "./Product";
import { ProductAllergy } from "./ProductAllergy";

@Entity()
@Unique(["name"])
export class Allergy {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Length(1, 40)
  name: string;

  /*@ManyToMany((type) => Product, (product) => product.allergies)
  @JoinTable()
  products: Product[];*/

  @OneToMany(
    (type) => ProductAllergy,
    (productAllergy) => productAllergy.allergy
  )
  productAllergies: ProductAllergy[];
}
