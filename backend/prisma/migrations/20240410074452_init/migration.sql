/*
  Warnings:

  - You are about to drop the `SuiviUtilisateur` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Utilisateur` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "SuiviUtilisateur" DROP CONSTRAINT "SuiviUtilisateur_utilisateurId_fkey";

-- DropTable
DROP TABLE "SuiviUtilisateur";

-- DropTable
DROP TABLE "Utilisateur";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'utilisateur',
    "date_inscription" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profil" (
    "id" SERIAL NOT NULL,
    "telephone" TEXT NOT NULL,
    "avatar" TEXT,
    "bannere" TEXT,
    "adress" TEXT,
    "ville" TEXT,
    "date_adhesion" TIMESTAMP(3) NOT NULL,
    "date_expiration" TIMESTAMP(3) NOT NULL,
    "status_adhesion" TEXT NOT NULL DEFAULT 'actif',
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

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Profil_telephone_key" ON "Profil"("telephone");

-- CreateIndex
CREATE UNIQUE INDEX "Profil_userId_key" ON "Profil"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "SuiviUser_userId_key" ON "SuiviUser"("userId");

-- AddForeignKey
ALTER TABLE "Profil" ADD CONSTRAINT "Profil_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SuiviUser" ADD CONSTRAINT "SuiviUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
