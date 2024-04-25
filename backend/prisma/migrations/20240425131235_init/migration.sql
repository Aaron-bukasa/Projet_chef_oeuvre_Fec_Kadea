-- DropIndex
DROP INDEX "Demande_email_key";

-- AlterTable
ALTER TABLE "Demande" ADD COLUMN     "confirmed" BOOLEAN NOT NULL DEFAULT false;
