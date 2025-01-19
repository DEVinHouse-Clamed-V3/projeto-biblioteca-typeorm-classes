import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Livros1737295499263 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "books",
              columns: [
                {
                  name: "id",
                  type: "int",
                  isPrimary: true,
                  isGenerated: true,
                  generationStrategy: "increment",
                },
                {
                  name: "title",
                  type: "varchar",
                  isNullable: false,
                },
                {
                  name: "description",
                  type: "text",
                  isNullable: true,
                },
                {
                  name: "publication_date",
                  type: "date",
                  isNullable: false,
                },
                {
                  name: "isbn",
                  type: "varchar",
                  isNullable: false,
                  isUnique: true,
                },
                {
                  name: "page_count",
                  type: "int",
                  isNullable: true,
                },
                {
                  name: "language",
                  type: "varchar",
                  isNullable: true,
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
        await queryRunner.dropTable("books");
    }

}
