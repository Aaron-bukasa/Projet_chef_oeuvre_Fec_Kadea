/*
  Warnings:

  - Added the required column `objet` to the `NewsLetter` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "confirmed" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "NewsLetter" ADD COLUMN     "objet" TEXT NOT NULL;
