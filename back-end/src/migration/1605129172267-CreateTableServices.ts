import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableServices1605129172267 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "Services",
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
                    name: "url",
                    type: "varchar"
                },
                {
                    name: "description",
                    type: "varchar"
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Services");
    }

}
