/*
  Warnings:

  - You are about to drop the column `confirmed` on the `Demande` table. All the data in the column will be lost.
  - You are about to drop the column `statut` on the `Demande` table. All the data in the column will be lost.
  - You are about to drop the `SuiviDemande` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "SuiviDemande" DROP CONSTRAINT "SuiviDemande_demandeRequestId_fkey";

-- AlterTable
ALTER TABLE "Demande" DROP COLUMN "confirmed",
DROP COLUMN "statut";

-- DropTable
DROP TABLE "SuiviDemande";
