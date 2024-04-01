/*
  Warnings:

  - Made the column `telephone` on table `Utilisateur` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Utilisateur" ALTER COLUMN "telephone" SET NOT NULL;
