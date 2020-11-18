import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableTierDescription1605712695450 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "TierDescription",
            columns: [
                {
                    name: "id",
                    type: "integer",
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: "name",
                    type: "varchar"
                },
                {
                    name: "tier_id",
                    type: "integer"
                }
            ],
            foreignKeys: [
                {
                    name: "TierID",
                    columnNames: ["tier_id"],
                    referencedTableName: "Tiers",
                    referencedColumnNames: ["id"],
                    onUpdate: "CASCADE",
                    onDelete: "CASCADE"
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("TierDescription");
    }

}
