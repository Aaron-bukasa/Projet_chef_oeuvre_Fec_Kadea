/*
  Warnings:

  - You are about to drop the column `subscribed` on the `Message` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Message" DROP COLUMN "subscribed",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "reponse" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "NewsLetter" ADD COLUMN     "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "MessageReponse" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "objet" TEXT NOT NULL,
    "reponse" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "messageId" INTEGER NOT NULL,

    CONSTRAINT "MessageReponse_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MessageReponse_messageId_key" ON "MessageReponse"("messageId");

-- AddForeignKey
ALTER TABLE "MessageReponse" ADD CONSTRAINT "MessageReponse_messageId_fkey" FOREIGN KEY ("messageId") REFERENCES "Message"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
