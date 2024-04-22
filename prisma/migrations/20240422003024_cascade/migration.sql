-- DropForeignKey
ALTER TABLE "passengers" DROP CONSTRAINT "passengers_raceId_fkey";

-- AddForeignKey
ALTER TABLE "passengers" ADD CONSTRAINT "passengers_raceId_fkey" FOREIGN KEY ("raceId") REFERENCES "race"("id") ON DELETE CASCADE ON UPDATE CASCADE;
