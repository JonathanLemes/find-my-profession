import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableUsers1605719967185 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "Users",
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
                    name: "firstName",
                    type: "varchar"
                },
                {
                    name: "lastName",
                    type: "varchar"
                },
                {
                    name: "email",
                    type: "varchar"
                },
                {
                    name: "address",
                    type: "varchar"
                },
                {
                    name: "country",
                    type: "varchar"
                },
                {
                    name: "state",
                    type: "varchar"
                },
                {
                    name: "zip",
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
        await queryRunner.dropTable("Users");
    }

}
