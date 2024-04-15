/*
  Warnings:

  - You are about to drop the `Newsletter` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Newsletter";

-- CreateTable
CREATE TABLE "NewsLetter" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "NewsLetter_pkey" PRIMARY KEY ("id")
);
