import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
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
