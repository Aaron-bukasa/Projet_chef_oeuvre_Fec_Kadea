-- CreateTable
CREATE TABLE "SuiviUtilisateur" (
    "id" SERIAL NOT NULL,
    "notifications" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "utilisateurId" INTEGER NOT NULL,

    CONSTRAINT "SuiviUtilisateur_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SuiviUtilisateur" ADD CONSTRAINT "SuiviUtilisateur_utilisateurId_fkey" FOREIGN KEY ("utilisateurId") REFERENCES "Utilisateur"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
