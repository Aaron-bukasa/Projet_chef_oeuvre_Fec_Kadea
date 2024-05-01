-- AlterTable
ALTER TABLE "User" ADD COLUMN     "member" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "verified" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "ConfirmationUser" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "expiration" TIMESTAMP(3) NOT NULL,
    "userRequestId" TEXT NOT NULL,

    CONSTRAINT "ConfirmationUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ConfirmationUser_userRequestId_key" ON "ConfirmationUser"("userRequestId");

-- AddForeignKey
ALTER TABLE "ConfirmationUser" ADD CONSTRAINT "ConfirmationUser_userRequestId_fkey" FOREIGN KEY ("userRequestId") REFERENCES "User"("requestId") ON DELETE RESTRICT ON UPDATE CASCADE;
