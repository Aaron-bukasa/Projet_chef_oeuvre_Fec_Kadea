/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `NewsLetter` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "subscribed" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "NewsLetter" ADD COLUMN     "subscribed" BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX "NewsLetter_email_key" ON "NewsLetter"("email");
