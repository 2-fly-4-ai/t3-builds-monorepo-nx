-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_postId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_techId_fkey";

-- AlterTable
ALTER TABLE "Comment" ALTER COLUMN "postId" DROP NOT NULL,
ALTER COLUMN "techId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_techId_fkey" FOREIGN KEY ("techId") REFERENCES "Tech"("id") ON DELETE SET NULL ON UPDATE CASCADE;
