import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    address: string;

    @Column()
    country: string;

    @Column()
    state: string;

    @Column()
    zip: string;

    @Column()
    tier_id: number;

}
