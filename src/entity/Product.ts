import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  OneToMany,
  ManyToMany,
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
import { ProductAllergy } from "./ProductAllergy";
import { ProductListing } from "./ProductListing";

@Entity()
@Unique(["name"])
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Matches("^wine$|^cheese$|^tea$")
  type: string;

  @Column()
  @Length(1, 40)
  name: string;

  /*@ManyToMany((type) => Allergy, (allergy) => allergy.products)
  allergies: Allergy[];*/

  @OneToMany(
    (type) => ProductAllergy,
    (productAllergy) => productAllergy.product
  )
  productAllergies: ProductAllergy[];

  @OneToMany(
    (type) => ProductListing,
    (productListing) => productListing.product
  )
  productListings: ProductListing[];
}
