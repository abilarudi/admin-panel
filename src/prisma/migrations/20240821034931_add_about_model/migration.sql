/*
  Warnings:

  - You are about to drop the column `content` on the `About` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `About` table. All the data in the column will be lost.
  - You are about to drop the `Entry` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `updatedAt` to the `About` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "About" DROP COLUMN "content",
DROP COLUMN "title",
ADD COLUMN     "about1" TEXT,
ADD COLUMN     "about2" TEXT,
ADD COLUMN     "about3" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "followers" INTEGER,
ADD COLUMN     "mitra" INTEGER,
ADD COLUMN     "terjual" INTEGER,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "Entry";

-- CreateTable
CREATE TABLE "Content" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "aboutId" INTEGER NOT NULL,

    CONSTRAINT "Content_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Why" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "aboutId" INTEGER NOT NULL,

    CONSTRAINT "Why_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Featured" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "highlight" TEXT,
    "aboutId" INTEGER NOT NULL,

    CONSTRAINT "Featured_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Content" ADD CONSTRAINT "Content_aboutId_fkey" FOREIGN KEY ("aboutId") REFERENCES "About"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Why" ADD CONSTRAINT "Why_aboutId_fkey" FOREIGN KEY ("aboutId") REFERENCES "About"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Featured" ADD CONSTRAINT "Featured_aboutId_fkey" FOREIGN KEY ("aboutId") REFERENCES "About"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
