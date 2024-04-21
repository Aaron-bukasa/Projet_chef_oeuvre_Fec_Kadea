/*
  Warnings:

  - You are about to drop the column `abonnesId` on the `NewsLetter` table. All the data in the column will be lost.
  - You are about to drop the column `subscribed` on the `NewsLetter` table. All the data in the column will be lost.
  - You are about to drop the `Abonnes` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[abonnementId]` on the table `NewsLetter` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `abonnementId` to the `NewsLetter` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "NewsLetter" DROP CONSTRAINT "NewsLetter_abonnesId_fkey";

-- DropIndex
DROP INDEX "NewsLetter_abonnesId_key";

-- AlterTable
ALTER TABLE "NewsLetter" DROP COLUMN "abonnesId",
DROP COLUMN "subscribed",
ADD COLUMN     "abonnementId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Abonnes";

-- CreateTable
CREATE TABLE "Abonnement" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "confirmed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Abonnement_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Abonnement_email_key" ON "Abonnement"("email");

-- CreateIndex
CREATE UNIQUE INDEX "NewsLetter_abonnementId_key" ON "NewsLetter"("abonnementId");

-- AddForeignKey
ALTER TABLE "NewsLetter" ADD CONSTRAINT "NewsLetter_abonnementId_fkey" FOREIGN KEY ("abonnementId") REFERENCES "Abonnement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
