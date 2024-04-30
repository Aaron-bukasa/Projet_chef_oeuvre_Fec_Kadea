-- CreateTable
CREATE TABLE "Demande" (
    "id" SERIAL NOT NULL,
    "requestId" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "nom_organisation" TEXT NOT NULL,
    "forme_juridique" TEXT NOT NULL,
    "secteur_activite" TEXT NOT NULL,
    "province_activite" TEXT NOT NULL,
    "confirmed" BOOLEAN NOT NULL DEFAULT false,
    "statut" TEXT NOT NULL DEFAULT 'en attente',
    "date_soumission" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Demande_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SuiviDemande" (
    "id" SERIAL NOT NULL,
    "requestId" TEXT NOT NULL,
    "evenement" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "demandeRequestId" TEXT NOT NULL,

    CONSTRAINT "SuiviDemande_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "requestId" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'membre',
    "date_inscription" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profil" (
    "id" SERIAL NOT NULL,
    "requestId" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "avatar" TEXT,
    "bannere" TEXT,
    "adress" TEXT,
    "ville" TEXT,
    "date_adhesion" TIMESTAMP(3),
    "date_expiration" TIMESTAMP(3),
    "status_adhesion" TEXT NOT NULL DEFAULT 'inactif',
    "userRequestId" TEXT NOT NULL,

    CONSTRAINT "Profil_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SuiviUser" (
    "id" SERIAL NOT NULL,
    "requestId" TEXT NOT NULL,
    "notifications" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userRequestId" TEXT NOT NULL,

    CONSTRAINT "SuiviUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NewsLetter" (
    "id" SERIAL NOT NULL,
    "requestId" TEXT NOT NULL,
    "objet" TEXT NOT NULL,
    "newsletter" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "NewsLetter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Abonnement" (
    "id" SERIAL NOT NULL,
    "requestId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "confirmed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Abonnement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" SERIAL NOT NULL,
    "requestId" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "objet" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "confirmed" BOOLEAN NOT NULL DEFAULT false,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "reponse" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MessageReponse" (
    "id" SERIAL NOT NULL,
    "requestId" TEXT NOT NULL,
    "objet" TEXT NOT NULL,
    "reponse" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "messageRequestId" TEXT NOT NULL,

    CONSTRAINT "MessageReponse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rapport" (
    "id" SERIAL NOT NULL,
    "requestId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "date_generation" TIMESTAMP(3) NOT NULL,
    "contenu" TEXT NOT NULL,

    CONSTRAINT "Rapport_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Demande_requestId_key" ON "Demande"("requestId");

-- CreateIndex
CREATE UNIQUE INDEX "Demande_email_key" ON "Demande"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Demande_telephone_key" ON "Demande"("telephone");

-- CreateIndex
CREATE UNIQUE INDEX "SuiviDemande_requestId_key" ON "SuiviDemande"("requestId");

-- CreateIndex
CREATE UNIQUE INDEX "User_requestId_key" ON "User"("requestId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Profil_requestId_key" ON "Profil"("requestId");

-- CreateIndex
CREATE UNIQUE INDEX "Profil_telephone_key" ON "Profil"("telephone");

-- CreateIndex
CREATE UNIQUE INDEX "Profil_userRequestId_key" ON "Profil"("userRequestId");

-- CreateIndex
CREATE UNIQUE INDEX "SuiviUser_requestId_key" ON "SuiviUser"("requestId");

-- CreateIndex
CREATE UNIQUE INDEX "SuiviUser_userRequestId_key" ON "SuiviUser"("userRequestId");

-- CreateIndex
CREATE UNIQUE INDEX "NewsLetter_requestId_key" ON "NewsLetter"("requestId");

-- CreateIndex
CREATE UNIQUE INDEX "Abonnement_requestId_key" ON "Abonnement"("requestId");

-- CreateIndex
CREATE UNIQUE INDEX "Message_requestId_key" ON "Message"("requestId");

-- CreateIndex
CREATE UNIQUE INDEX "MessageReponse_requestId_key" ON "MessageReponse"("requestId");

-- CreateIndex
CREATE UNIQUE INDEX "MessageReponse_messageRequestId_key" ON "MessageReponse"("messageRequestId");

-- CreateIndex
CREATE UNIQUE INDEX "Rapport_requestId_key" ON "Rapport"("requestId");

-- AddForeignKey
ALTER TABLE "SuiviDemande" ADD CONSTRAINT "SuiviDemande_demandeRequestId_fkey" FOREIGN KEY ("demandeRequestId") REFERENCES "Demande"("requestId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profil" ADD CONSTRAINT "Profil_userRequestId_fkey" FOREIGN KEY ("userRequestId") REFERENCES "User"("requestId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SuiviUser" ADD CONSTRAINT "SuiviUser_userRequestId_fkey" FOREIGN KEY ("userRequestId") REFERENCES "User"("requestId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MessageReponse" ADD CONSTRAINT "MessageReponse_messageRequestId_fkey" FOREIGN KEY ("messageRequestId") REFERENCES "Message"("requestId") ON DELETE RESTRICT ON UPDATE CASCADE;
