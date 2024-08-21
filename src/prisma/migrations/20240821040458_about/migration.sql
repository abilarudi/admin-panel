/*
  Warnings:

  - You are about to drop the column `createdAt` on the `About` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `About` table. All the data in the column will be lost.
  - Made the column `about1` on table `About` required. This step will fail if there are existing NULL values in that column.
  - Made the column `about2` on table `About` required. This step will fail if there are existing NULL values in that column.
  - Made the column `about3` on table `About` required. This step will fail if there are existing NULL values in that column.
  - Made the column `followers` on table `About` required. This step will fail if there are existing NULL values in that column.
  - Made the column `mitra` on table `About` required. This step will fail if there are existing NULL values in that column.
  - Made the column `terjual` on table `About` required. This step will fail if there are existing NULL values in that column.
  - Made the column `highlight` on table `Featured` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "About" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ALTER COLUMN "about1" SET NOT NULL,
ALTER COLUMN "about2" SET NOT NULL,
ALTER COLUMN "about3" SET NOT NULL,
ALTER COLUMN "followers" SET NOT NULL,
ALTER COLUMN "mitra" SET NOT NULL,
ALTER COLUMN "terjual" SET NOT NULL;

-- AlterTable
ALTER TABLE "Featured" ALTER COLUMN "highlight" SET NOT NULL;
