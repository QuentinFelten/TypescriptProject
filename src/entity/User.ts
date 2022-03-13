import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  OneToMany,
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
} from "class-validator";
import { ProductListing } from "./ProductListing";
import { BuyingHistory } from "./BuyingHistory";

@Entity()
@Unique(["email"])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Length(1, 25)
  firstName: string;

  @Column()
  @Length(1, 25)
  lastName: string;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  password: string;

  @OneToMany(
    (type) => ProductListing,
    (productListing) => productListing.vendor
  )
  productListings: ProductListing[];

  @OneToMany((type) => BuyingHistory, (buyingHistory) => buyingHistory.Buyer)
  purchases: BuyingHistory[];
}
