/*
  Warnings:

  - You are about to drop the column `abonnementId` on the `NewsLetter` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "NewsLetter" DROP CONSTRAINT "NewsLetter_abonnementId_fkey";

-- DropIndex
DROP INDEX "NewsLetter_abonnementId_key";

-- AlterTable
ALTER TABLE "NewsLetter" DROP COLUMN "abonnementId";
