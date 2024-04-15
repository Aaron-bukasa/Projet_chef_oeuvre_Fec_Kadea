/*
  Warnings:

  - You are about to drop the column `motivation` on the `Demande` table. All the data in the column will be lost.
  - You are about to drop the column `objectifs` on the `Demande` table. All the data in the column will be lost.
  - You are about to drop the column `organisation` on the `Demande` table. All the data in the column will be lost.
  - You are about to drop the column `role_ds_entreprise` on the `Demande` table. All the data in the column will be lost.
  - You are about to drop the `Paiement` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `forme_juridique` to the `Demande` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nom_organisation` to the `Demande` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Demande" DROP COLUMN "motivation",
DROP COLUMN "objectifs",
DROP COLUMN "organisation",
DROP COLUMN "role_ds_entreprise",
ADD COLUMN     "forme_juridique" TEXT NOT NULL,
ADD COLUMN     "nom_organisation" TEXT NOT NULL;

-- DropTable
DROP TABLE "Paiement";
