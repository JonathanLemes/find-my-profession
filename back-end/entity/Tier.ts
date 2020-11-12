import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Tier {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    service_id: number;

}
