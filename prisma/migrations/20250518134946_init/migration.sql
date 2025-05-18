-- CreateTable
CREATE TABLE "Event" (
    "id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "starts" TIMESTAMP(3) NOT NULL,
    "ends" TIMESTAMP(3) NOT NULL,
    "description" TEXT,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Event_starts_idx" ON "Event"("starts");
