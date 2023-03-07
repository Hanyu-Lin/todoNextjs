/*
  Warnings:

  - You are about to drop the column `completedDateTime` on the `Tasks` table. All the data in the column will be lost.
  - You are about to drop the column `order` on the `Tasks` table. All the data in the column will be lost.
  - Added the required column `completed` to the `Tasks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Projects" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Tasks" DROP COLUMN "completedDateTime",
DROP COLUMN "order",
ADD COLUMN     "completed" BOOLEAN NOT NULL,
ADD COLUMN     "reatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
