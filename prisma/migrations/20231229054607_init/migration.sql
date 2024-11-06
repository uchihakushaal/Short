-- DropForeignKey
ALTER TABLE "View" DROP CONSTRAINT "View_linksId_fkey";

-- AddForeignKey
ALTER TABLE "View" ADD CONSTRAINT "View_linksId_fkey" FOREIGN KEY ("linksId") REFERENCES "Links"("id") ON DELETE CASCADE ON UPDATE CASCADE;
