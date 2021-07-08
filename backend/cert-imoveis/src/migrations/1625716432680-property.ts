import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Properties1625716432680 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name: "property",
            columns: [{
                name: "id",
                type: "int",
                isPrimary: true,
                generationStrategy: 'increment'
            },
            {
                name: "publicationDate",
                type: "date",
            },
            {
                name: "title",
                type: "varchar",
                isNullable: false,
            },
            {
                name: "description",
                type: "text",
                isNullable: false,
            },
            {
                name: "price",
                type: "decimal",
                isNullable: false,
            },
            {
                name: "area",
                type: "decimal",
                isNullable: false,
            },
            {
                name: "cep",
                type: "int",
                isNullable: false,
            },
            {
                name: "address",
                type: "varchar",
                isNullable: false,
            },
            {
                name: "patio",
                type: "varchar",
                isNullable: false,
            },
            {
                name: "houseNumber",
                type: "int",
                isNullable: false,
            },
            {
                name: "complement",
                type: "varchar",
                isNullable: false,
            },
            {
                name: "district",
                type: "varchar",
                isNullable: false,
            },
            {
                name: "city",
                type: "varchar",
                isNullable: false,
            },
            {
                name: "uf",
                type: "varchar",
                isNullable: false,
            },
            ]
        }))}
    

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable("property")
    }

}
