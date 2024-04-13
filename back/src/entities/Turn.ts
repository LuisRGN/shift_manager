import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity({
    name: "turns"
})
export class Turn {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    date: Date
    @Column()
    time: string
    @Column({ default: "active" })
    status: string

    @ManyToOne(() => User, user => user.turns, { onDelete: "CASCADE" })
    user: User
};