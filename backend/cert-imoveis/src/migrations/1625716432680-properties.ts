import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class Properties1625716432680 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name: "properties",
            columns: [{
                name: "id",
                type: "int",
                isPrimary: true,
                generationStrategy: 'increment'
            },
            {
                name: "publicationDate",
                type: "varchar",
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
            {
                name: "userId",
                type: "int",
                isNullable: false
            }
            ]
        }))
        
        await queryRunner.createForeignKey("properties", new TableForeignKey({
            columnNames: ["userId"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
            onDelete: "CASCADE"
        }));
    }
    

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = queryRunner.getTable('properties')
        const foreignKey = (await table).foreignKeys.find(fk => fk.columnNames.indexOf("userId") !== -1);
        await queryRunner.dropForeignKey("properties", foreignKey);
        queryRunner.dropTable("properties")
    }

}
