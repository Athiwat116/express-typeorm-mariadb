import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Category } from "./Category"

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 40 })
    productName: string

    @Column({ type: "decimal", precision: 10, scale: 2, default: 5})
    price: number

    @Column({ default: true })
    inStock: boolean

    @Column({ type: "tinyint", default: 1 })
    rating: number

    @ManyToOne(()=>Category, (category) => category.products, { nullable: true })
    category: Category
}