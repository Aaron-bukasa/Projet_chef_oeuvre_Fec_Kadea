/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Demande` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Demande_email_key" ON "Demande"("email");
