import { MigrationInterface, QueryRunner,Table } from "typeorm"

export class Authors1737291081731 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "authors",
              columns: [
                {
                  name: "id",
                  type: "int",
                  isPrimary: true,
                  isGenerated: true,
                  generationStrategy: "increment",
                },
                {
                  name: "name",
                  type: "varchar",
                  isNullable: false,
                },
                {
                  name: "birthdate",
                  type: "date",
                },
                {
                  name: "biography",
                  type: "text",
                },
                {
                  name: "nationality",
                  type: "varchar",
                  isNullable: false,
                },
                {
                  name: "active",
                  type: "boolean",
                  default: true,
                },
                {
                  name: "created_at",
                  type: "timestamp",
                  default: "now()",
                },
                {
                  name: "updated_at",
                  type: "timestamp",
                  default: "now()",
                },
              ],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
