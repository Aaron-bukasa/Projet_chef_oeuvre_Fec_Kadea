-- CreateTable
CREATE TABLE "SuiviDemande" (
    "id" SERIAL NOT NULL,
    "evenement" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "demandeId" INTEGER NOT NULL,

    CONSTRAINT "SuiviDemande_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SuiviDemande" ADD CONSTRAINT "SuiviDemande_demandeId_fkey" FOREIGN KEY ("demandeId") REFERENCES "Demande"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
