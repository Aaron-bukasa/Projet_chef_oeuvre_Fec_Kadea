/*
  Warnings:

  - You are about to drop the column `email` on the `NewsLetter` table. All the data in the column will be lost.
  - You are about to drop the column `nom` on the `NewsLetter` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[abonnesId]` on the table `NewsLetter` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `abonnesId` to the `NewsLetter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `newsletter` to the `NewsLetter` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "NewsLetter_email_key";

-- AlterTable
ALTER TABLE "NewsLetter" DROP COLUMN "email",
DROP COLUMN "nom",
ADD COLUMN     "abonnesId" INTEGER NOT NULL,
ADD COLUMN     "newsletter" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Abonnes" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "subscribed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Abonnes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Abonnes_email_key" ON "Abonnes"("email");

-- CreateIndex
CREATE UNIQUE INDEX "NewsLetter_abonnesId_key" ON "NewsLetter"("abonnesId");

-- AddForeignKey
ALTER TABLE "NewsLetter" ADD CONSTRAINT "NewsLetter_abonnesId_fkey" FOREIGN KEY ("abonnesId") REFERENCES "Abonnes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
