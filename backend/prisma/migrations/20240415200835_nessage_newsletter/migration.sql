/*
  Warnings:

  - You are about to drop the `NewsLetter` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `nom` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "nom" TEXT NOT NULL;

-- DropTable
DROP TABLE "NewsLetter";

-- CreateTable
CREATE TABLE "Newsletter" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Newsletter_pkey" PRIMARY KEY ("id")
);
