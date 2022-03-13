import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  OneToMany,
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
} from "class-validator";
import { ProductListing } from "./ProductListing";
import { User } from "./User";

@Entity()
export class BuyingHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => User, (user) => user.purchases)
  Buyer: User;

  @ManyToOne(
    (type) => ProductListing,
    (productListing) => productListing.vendor
  )
  productListing: ProductListing;

  @Column()
  @Min(0)
  quantity: number;

  @Column()
  @Min(0)
  price: number;

  @Column()
  @Min(0)
  @Max(5)
  rating: number;

  @Column()
  @Length(0, 200)
  review: string;
}
