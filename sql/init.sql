CREATE TABLE IF NOT EXISTS "option" (
	"id" serial NOT NULL UNIQUE,
	"name" varchar(255) NOT NULL,
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "extra" (
	"id" serial NOT NULL UNIQUE,
	"name" varchar(255) NOT NULL,
	"value" bigint NOT NULL,
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "juice" (
	"id" serial NOT NULL UNIQUE,
	"name" varchar(255) NOT NULL,
	"value" bigint NOT NULL,
	"juiceType" varchar(255) NOT NULL,
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "juice-option" (
	"id" serial NOT NULL UNIQUE,
	"juiceId" bigint NOT NULL,
	"optionId" bigint NOT NULL,
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "fruit" (
	"id" serial NOT NULL UNIQUE,
	"name" varchar(255) NOT NULL,
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "juice-extra" (
	"id" serial NOT NULL UNIQUE,
	"juiceId" bigint NOT NULL,
	"extraId" bigint NOT NULL,
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "juice-fruit" (
	"id" serial NOT NULL UNIQUE,
	"juiceId" bigint NOT NULL,
	"fruitId" bigint NOT NULL,
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "machine" (
	"id" serial NOT NULL UNIQUE,
	"name" varchar(255) NOT NULL,
	"local" varchar(255) NOT NULL,
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "order" (
	"id" serial NOT NULL UNIQUE,
	"juiceId" bigint NOT NULL,
	"machineId" bigint NOT NULL,
	"userDocument" varchar(255) NOT NULL,
	"createdAt" timestamp with time zone NOT NULL,
	"updatedAt" bigint NOT NULL,
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "order-option" (
	"id" serial NOT NULL UNIQUE,
	"orderId" bigint NOT NULL,
	"optionId" bigint NOT NULL,
	PRIMARY KEY ("id")
);




ALTER TABLE "juice-option" ADD CONSTRAINT "juice-option_fk1" FOREIGN KEY ("juiceId") REFERENCES "juice"("id");

ALTER TABLE "juice-option" ADD CONSTRAINT "juice-option_fk2" FOREIGN KEY ("optionId") REFERENCES "option"("id");

ALTER TABLE "juice-extra" ADD CONSTRAINT "juice-extra_fk1" FOREIGN KEY ("juiceId") REFERENCES "juice"("id");

ALTER TABLE "juice-extra" ADD CONSTRAINT "juice-extra_fk2" FOREIGN KEY ("extraId") REFERENCES "extra"("id");
ALTER TABLE "juice-fruit" ADD CONSTRAINT "juice-fruit_fk1" FOREIGN KEY ("juiceId") REFERENCES "juice"("id");

ALTER TABLE "juice-fruit" ADD CONSTRAINT "juice-fruit_fk2" FOREIGN KEY ("fruitId") REFERENCES "fruit"("id");

ALTER TABLE "order" ADD CONSTRAINT "order_fk1" FOREIGN KEY ("juiceId") REFERENCES "juice"("id");

ALTER TABLE "order" ADD CONSTRAINT "order_fk2" FOREIGN KEY ("machineId") REFERENCES "machine"("id");
ALTER TABLE "order-option" ADD CONSTRAINT "order-option_fk1" FOREIGN KEY ("orderId") REFERENCES "order"("id");

ALTER TABLE "order-option" ADD CONSTRAINT "order-option_fk2" FOREIGN KEY ("optionId") REFERENCES "option"("id");



-- Criação do tipo ENUM para juiceType
CREATE TYPE "juice_type_enum" AS ENUM ('SHARK', 'NATURAL', 'FUNCTIONAL', 'THAI', 'SMOOTHIE', 'GENERIC');

-- Alteração da coluna juiceType para usar o tipo ENUM
ALTER TABLE "juice"
    ALTER COLUMN "juiceType" TYPE "juice_type_enum" USING ("juiceType"::"juice_type_enum");

-- Inserção de dados na tabela option
INSERT INTO "option" ("name") VALUES ('sugar');
INSERT INTO "option" ("name") VALUES ('ice');
INSERT INTO "option" ("name") VALUES ('milk');

-- Inserção de dados na tabela extra
INSERT INTO "extra" ("name", "value") VALUES ('chantilly', 200);
INSERT INTO "extra" ("name", "value") VALUES ('alcohol', 300);
