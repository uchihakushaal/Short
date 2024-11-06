-- CreateTable
CREATE TABLE "Links" (
    "id" STRING NOT NULL,
    "title" STRING NOT NULL,
    "url" STRING NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "encodedUrl" STRING NOT NULL,
    "userId" STRING NOT NULL,

    CONSTRAINT "Links_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "View" (
    "id" STRING NOT NULL,
    "linksId" STRING NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "View_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Links_id_key" ON "Links"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Links_encodedUrl_key" ON "Links"("encodedUrl");

-- CreateIndex
CREATE UNIQUE INDEX "View_id_key" ON "View"("id");

-- AddForeignKey
ALTER TABLE "View" ADD CONSTRAINT "View_linksId_fkey" FOREIGN KEY ("linksId") REFERENCES "Links"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
