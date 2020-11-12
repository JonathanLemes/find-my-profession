import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableTiers1605130137408 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "Tiers",
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
                    name: "price",
                    type: "decimal",
                    scale: 2,
                    precision: 2
                },
                {
                    name: "service_id",
                    type: "integer"
                }
            ],
            foreignKeys: [
                {
                    name: "ServiceID",
                    columnNames: ["service_id"],
                    referencedTableName: "Services",
                    referencedColumnNames: ["id"],
                    onUpdate: "CASCADE",
                    onDelete: "CASCADE"
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Tiers");
    }

}
