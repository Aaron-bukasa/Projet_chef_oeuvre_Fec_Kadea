/*
  Warnings:

  - A unique constraint covering the columns `[requestId]` on the table `ConfirmationUser` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `requestId` to the `ConfirmationUser` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ConfirmationUser" ADD COLUMN     "requestId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ConfirmationUser_requestId_key" ON "ConfirmationUser"("requestId");
