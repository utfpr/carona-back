-- CreateTable
CREATE TABLE "user" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "car" (
    "id" UUID NOT NULL,
    "plate" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" UUID NOT NULL,

    CONSTRAINT "car_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "race" (
    "id" UUID NOT NULL,
    "originPoint" VARCHAR(255) NOT NULL,
    "endPoint" VARCHAR(255) NOT NULL,
    "timeStart" TIMESTAMPTZ NOT NULL,
    "userId" UUID NOT NULL,
    "carId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "seats" INTEGER NOT NULL,

    CONSTRAINT "race_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "passengers" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "raceId" UUID NOT NULL,

    CONSTRAINT "passengers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "car" ADD CONSTRAINT "car_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "race" ADD CONSTRAINT "race_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "race" ADD CONSTRAINT "race_carId_fkey" FOREIGN KEY ("carId") REFERENCES "car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "passengers" ADD CONSTRAINT "passengers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "passengers" ADD CONSTRAINT "passengers_raceId_fkey" FOREIGN KEY ("raceId") REFERENCES "race"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
