/*
  Warnings:

  - You are about to drop the `Fichier` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[telephone]` on the table `Demande` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `motivation` to the `Demande` table without a default value. This is not possible if the table is not empty.
  - Added the required column `objectifs` to the `Demande` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role_ds_entreprise` to the `Demande` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telephone` to the `Demande` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Fichier" DROP CONSTRAINT "Fichier_demandeId_fkey";

-- AlterTable
ALTER TABLE "Demande" ADD COLUMN     "motivation" TEXT NOT NULL,
ADD COLUMN     "objectifs" TEXT NOT NULL,
ADD COLUMN     "role_ds_entreprise" TEXT NOT NULL,
ADD COLUMN     "telephone" TEXT NOT NULL;

-- DropTable
DROP TABLE "Fichier";

-- CreateIndex
CREATE UNIQUE INDEX "Demande_telephone_key" ON "Demande"("telephone");
