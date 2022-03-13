import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { IsInt, Length, Min } from "class-validator";
import { User } from "./User";
import { Product } from "./Product";
import { BuyingHistory } from "./BuyingHistory";

@Entity()
export class ProductListing {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Min(0)
  price: number;

  @Column()
  @Min(0)
  @IsInt()
  stock: number;

  @Column()
  @Length(0, 200)
  description: string;

  @ManyToOne((type) => User, (user) => user.productListings)
  vendor: User;

  @ManyToOne((type) => Product, (product) => product.productListings)
  product: Product;

  @OneToMany(
    (type) => BuyingHistory,
    (buyingHistory) => buyingHistory.productListing
  )
  buyingHistory: BuyingHistory[];
}
