import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Credential } from "./Credential"
import { Turn } from "./Turn"

@Entity({
    name: "users"
})
export class User {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    name: string
    @Column({ unique: true })
    email: string
    @Column({ type: "date" })
    birthdate: Date
    @Column("integer", { unique: true })
    dni: number

    @OneToOne(() => Credential, credential => credential.user, { cascade: true })
    @JoinColumn()
    credential: Credential

    @OneToMany(() => Turn, turn => turn.user)
    turns: Turn
}