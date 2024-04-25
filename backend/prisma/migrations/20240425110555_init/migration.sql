/*
  Warnings:

  - Added the required column `province_activite` to the `Demande` table without a default value. This is not possible if the table is not empty.
  - Added the required column `secteur_activite` to the `Demande` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Demande" ADD COLUMN     "province_activite" TEXT NOT NULL,
ADD COLUMN     "secteur_activite" TEXT NOT NULL,
ALTER COLUMN "date_soumission" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'membre';
