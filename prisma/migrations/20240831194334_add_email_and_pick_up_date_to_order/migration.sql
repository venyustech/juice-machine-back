/*
  Warnings:

  - Added the required column `email` to the `order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pickupDateTime` to the `order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "order" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "pickupDateTime" TEXT NOT NULL;
