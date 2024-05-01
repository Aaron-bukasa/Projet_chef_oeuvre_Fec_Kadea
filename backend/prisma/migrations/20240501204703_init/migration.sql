/*
  Warnings:

  - You are about to drop the column `member` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "member",
ALTER COLUMN "role" SET DEFAULT 'user';
