import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class TierDescription {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    tier_id: number;

}
