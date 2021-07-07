import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Users1625631308286 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "user",
            columns:[{
                name: "id",
                type: "int",
                isPrimary: true,
                generationStrategy: 'increment'
            },
            {
                name: "name",
                type: "varchar",
                isNullable: false
            },
            {
                name: "email",
                type: "varchar",
                isNullable: false,
                isUnique: true
            },
            {
                name: "phoneNumber",
                type: "bigint",
                isNullable: false
            },
            {
                name: "password",
                type: "varchar",
                isNullable: false
            },
        ],

        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}
