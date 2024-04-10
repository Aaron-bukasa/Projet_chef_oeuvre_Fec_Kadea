/*
  Warnings:

  - You are about to drop the column `nom` on the `User` table. All the data in the column will be lost.
  - Added the required column `nom` to the `Profil` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Profil" ADD COLUMN     "nom" TEXT NOT NULL,
ALTER COLUMN "status_adhesion" SET DEFAULT 'inactif';

-- AlterTable
ALTER TABLE "User" DROP COLUMN "nom";
