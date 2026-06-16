-- AlterTable
ALTER TABLE "Card" ADD COLUMN     "number" TEXT,
ADD COLUMN     "rarity" TEXT,
ADD COLUMN     "setId" INTEGER;

-- CreateTable
CREATE TABLE "TCG" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "TCG_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Set" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT,
    "tcgId" INTEGER,

    CONSTRAINT "Set_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TCG_name_key" ON "TCG"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Set_tcgId_name_key" ON "Set"("tcgId", "name");

-- AddForeignKey
ALTER TABLE "Set" ADD CONSTRAINT "Set_tcgId_fkey" FOREIGN KEY ("tcgId") REFERENCES "TCG"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_setId_fkey" FOREIGN KEY ("setId") REFERENCES "Set"("id") ON DELETE SET NULL ON UPDATE CASCADE;
