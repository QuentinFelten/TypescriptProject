import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  OneToMany,
} from "typeorm";
import { Length } from "class-validator";

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
