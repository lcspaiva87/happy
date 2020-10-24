import {Column, MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1602939580440 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "images",
      columns: [
        {
          name: "id",
          type: "integer",
          unsigned: true, //sempre vai ser um numero positivo
          isPrimary: true, //chave identificadora
          isGenerated: true, // vai ser gerada automaticamente
          generationStrategy: "increment", // vai ser gerada automaticamante usando uma lógica incremental ex: 1, 2, 3, 4, 5...
        },
        {
          name: 'path',
          type:'varchar',
        },
        {
          name: 'orphanage_id',
          type:'integer'
        }
      ],
      foreignKeys: [
        {
        name:'ImageOrphanage',
        columnNames:['orphanage_id'],
          referencedTableName: 'orphanages',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        
        }
      ]
      }))
    }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('images');
    }

}
