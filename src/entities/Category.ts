import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;


    @Column()
    categoryName: string

    @Column({ nullable: true })
    desscription: string

    @OneToMany(() => Product, (product) => product.category)
    products: Product[]
}