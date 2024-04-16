/*
  Warnings:

  - Added the required column `objet` to the `Message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nom` to the `NewsLetter` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "objet" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "NewsLetter" ADD COLUMN     "nom" TEXT NOT NULL;
