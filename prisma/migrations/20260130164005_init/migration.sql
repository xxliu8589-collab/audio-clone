-- CreateTable
CREATE TABLE "AudioTemplate" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "referenceId" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AudioTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AudioHistory" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "audioUrl" TEXT NOT NULL,
    "templateId" TEXT,
    "duration" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AudioHistory_pkey" PRIMARY KEY ("id")
);
