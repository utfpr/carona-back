/*
  Warnings:

  - Added the required column `mainCar` to the `car` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "car" ADD COLUMN     "mainCar" BOOLEAN NOT NULL;
