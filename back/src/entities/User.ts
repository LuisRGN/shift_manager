import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Credential } from "./Credential";
import { Turn } from "./Turn";

@Entity({
    name: "users"
})
export class User {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    name: string
    @Column()
    email: string
    @Column({ type: "date" })
    birthdate: Date
    @Column()
    dni: number

    @OneToOne(() => Credential, credential => credential.user, { onDelete: "CASCADE" })
    @JoinColumn()
    credential: Credential

    @OneToMany(() => Turn, turn => turn.user, { onDelete: "CASCADE" })
    turns: Turn[]
};