-- CreateTable
CREATE TABLE "Demande" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "organisation" TEXT NOT NULL,
    "role_ds_entreprise" TEXT NOT NULL,
    "motivation" TEXT NOT NULL,
    "objectifs" TEXT NOT NULL,
    "statut" TEXT NOT NULL DEFAULT 'en attente',
    "date_soumission" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Demande_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SuiviDemande" (
    "id" SERIAL NOT NULL,
    "evenement" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "demandeId" INTEGER NOT NULL,

    CONSTRAINT "SuiviDemande_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'utilisateur',
    "date_inscription" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profil" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "avatar" TEXT,
    "bannere" TEXT,
    "adress" TEXT,
    "ville" TEXT,
    "date_adhesion" TIMESTAMP(3),
    "date_expiration" TIMESTAMP(3),
    "status_adhesion" TEXT NOT NULL DEFAULT 'inactif',
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Profil_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SuiviUser" (
    "id" SERIAL NOT NULL,
    "notifications" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "SuiviUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NewsLetter" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "NewsLetter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rapport" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "date_generation" TIMESTAMP(3) NOT NULL,
    "contenu" TEXT NOT NULL,

    CONSTRAINT "Rapport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Paiement" (
    "id" SERIAL NOT NULL,
    "montant" DOUBLE PRECISION NOT NULL,
    "devise" TEXT NOT NULL,
    "statut" TEXT NOT NULL DEFAULT 'en attente',
    "date_paiement" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Paiement_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Demande_email_key" ON "Demande"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Demande_telephone_key" ON "Demande"("telephone");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Profil_telephone_key" ON "Profil"("telephone");

-- CreateIndex
CREATE UNIQUE INDEX "Profil_userId_key" ON "Profil"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "SuiviUser_userId_key" ON "SuiviUser"("userId");

-- AddForeignKey
ALTER TABLE "SuiviDemande" ADD CONSTRAINT "SuiviDemande_demandeId_fkey" FOREIGN KEY ("demandeId") REFERENCES "Demande"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profil" ADD CONSTRAINT "Profil_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SuiviUser" ADD CONSTRAINT "SuiviUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
