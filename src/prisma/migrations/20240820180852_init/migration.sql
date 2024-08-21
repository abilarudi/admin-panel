/*
  Warnings:

  - You are about to drop the column `title` on the `Home` table. All the data in the column will be lost.
  - Added the required column `h1` to the `Home` table without a default value. This is not possible if the table is not empty.
  - Added the required column `h2` to the `Home` table without a default value. This is not possible if the table is not empty.
  - Added the required column `h3` to the `Home` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tagline` to the `Home` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Home" DROP COLUMN "title",
ADD COLUMN     "h1" TEXT NOT NULL,
ADD COLUMN     "h2" TEXT NOT NULL,
ADD COLUMN     "h3" TEXT NOT NULL,
ADD COLUMN     "tagline" TEXT NOT NULL;
