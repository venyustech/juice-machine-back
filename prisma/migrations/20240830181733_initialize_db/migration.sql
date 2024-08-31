-- CreateEnum
CREATE TYPE "JuiceType" AS ENUM ('SHARK', 'NATURAL', 'FUNCTIONAL', 'THAI', 'SMOOTHIE', 'GENERIC');

-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('RECEIVED', 'IN_PREPARATION', 'DISPATCHED', 'DELIVERED');

-- CreateTable
CREATE TABLE "option" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "option_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "extra" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "value" INTEGER NOT NULL,

    CONSTRAINT "extra_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Juice" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "juiceType" "JuiceType" NOT NULL,

    CONSTRAINT "Juice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JuiceIngredient" (
    "id" SERIAL NOT NULL,
    "juiceId" INTEGER NOT NULL,
    "ingredientId" INTEGER NOT NULL,

    CONSTRAINT "JuiceIngredient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ingredient" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Ingredient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "juice-option" (
    "id" SERIAL NOT NULL,
    "juiceId" INTEGER NOT NULL,
    "optionId" INTEGER NOT NULL,

    CONSTRAINT "juice-option_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "juice-extra" (
    "id" SERIAL NOT NULL,
    "juiceId" INTEGER NOT NULL,
    "extraId" INTEGER NOT NULL,

    CONSTRAINT "juice-extra_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "machine" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "machine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order" (
    "id" SERIAL NOT NULL,
    "juiceId" INTEGER NOT NULL,
    "machineId" INTEGER NOT NULL,
    "userDocument" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "status" "OrderStatus" NOT NULL,

    CONSTRAINT "order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order-option" (
    "id" SERIAL NOT NULL,
    "orderId" INTEGER NOT NULL,
    "optionId" INTEGER NOT NULL,

    CONSTRAINT "order-option_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order-extra" (
    "id" SERIAL NOT NULL,
    "orderId" INTEGER NOT NULL,
    "extraId" INTEGER NOT NULL,

    CONSTRAINT "order-extra_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "JuiceIngredient" ADD CONSTRAINT "JuiceIngredient_juiceId_fkey" FOREIGN KEY ("juiceId") REFERENCES "Juice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JuiceIngredient" ADD CONSTRAINT "JuiceIngredient_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "Ingredient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "juice-option" ADD CONSTRAINT "juice-option_juiceId_fkey" FOREIGN KEY ("juiceId") REFERENCES "Juice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "juice-option" ADD CONSTRAINT "juice-option_optionId_fkey" FOREIGN KEY ("optionId") REFERENCES "option"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "juice-extra" ADD CONSTRAINT "juice-extra_juiceId_fkey" FOREIGN KEY ("juiceId") REFERENCES "Juice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "juice-extra" ADD CONSTRAINT "juice-extra_extraId_fkey" FOREIGN KEY ("extraId") REFERENCES "extra"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_juiceId_fkey" FOREIGN KEY ("juiceId") REFERENCES "Juice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_machineId_fkey" FOREIGN KEY ("machineId") REFERENCES "machine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order-option" ADD CONSTRAINT "order-option_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order-option" ADD CONSTRAINT "order-option_optionId_fkey" FOREIGN KEY ("optionId") REFERENCES "option"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order-extra" ADD CONSTRAINT "order-extra_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order-extra" ADD CONSTRAINT "order-extra_extraId_fkey" FOREIGN KEY ("extraId") REFERENCES "extra"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
