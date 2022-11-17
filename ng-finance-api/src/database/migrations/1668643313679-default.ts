import { MigrationInterface, QueryRunner } from "typeorm";

export class default1668643313679 implements MigrationInterface {
    name = 'default1668643313679'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_6bf9ac8010b53dc13a593f25e5f"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "account_Id"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "accountsId"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "accounts_id" uuid`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_f89ab1f917141afeface36ecc8c" FOREIGN KEY ("accounts_id") REFERENCES "accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_f89ab1f917141afeface36ecc8c"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "accounts_id"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "accountsId" uuid`);
        await queryRunner.query(`ALTER TABLE "users" ADD "account_Id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_6bf9ac8010b53dc13a593f25e5f" FOREIGN KEY ("accountsId") REFERENCES "accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
