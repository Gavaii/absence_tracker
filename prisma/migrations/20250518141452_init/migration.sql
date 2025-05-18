/*
  Warnings:

  - You are about to drop the column `starts` on the `Event` table. All the data in the column will be lost.
  - Added the required column `begins` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Event_starts_idx";

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "starts",
ADD COLUMN     "begins" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE INDEX "Event_begins_idx" ON "Event"("begins");
