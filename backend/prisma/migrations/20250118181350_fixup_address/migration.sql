/*
  Warnings:

  - You are about to drop the column `organizationId` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `originalRequestId` on the `Address` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Address" DROP COLUMN "organizationId",
DROP COLUMN "originalRequestId";
