import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Service {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    url: string;

    @Column()
    description: string;

}
