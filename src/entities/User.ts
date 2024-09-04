import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

export enum UserRole {
    ADMIN = 'admin',
    USER = 'user'
}
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 20 })
    username: string

    @Column({ unique: true })
    email: string

    @Column()
    password: string

    @Column({ default: true })
    active: boolean

    @Column({ type: "enum", enum: UserRole, default: UserRole.USER })
    role: UserRole
}