/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Users" (
    "uid" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "jsontoken" TEXT DEFAULT 'need token',
    "restPasswordTocken" TEXT,
    "restPasswordExpire" TIMESTAMP(3),
    "verified" BOOLEAN DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "firstName" TEXT DEFAULT 'add a firstname',
    "lastName" TEXT DEFAULT 'add a lastname',
    "userid" TEXT NOT NULL,
    "profilepic" TEXT NOT NULL DEFAULT 'file/defaultImage.jpg',
    "mobileNumber" TEXT,
    "description" TEXT DEFAULT 'provide description',
    "tagDescription" TEXT DEFAULT 'provide short description'
);

-- CreateTable
CREATE TABLE "UserEducation" (
    "id" BIGSERIAL NOT NULL,
    "profileid" TEXT NOT NULL,
    "course" TEXT NOT NULL,
    "institutionid" TEXT NOT NULL,
    "description" TEXT DEFAULT 'add description ',
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "persentage" TEXT DEFAULT 'add your percentage'
);

-- CreateTable
CREATE TABLE "Institution" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "instituteId" TEXT NOT NULL,
    "description" TEXT DEFAULT 'add description ',
    "addressid" TEXT DEFAULT 'add address',
    "pageid" TEXT DEFAULT 'add a page'
);

-- CreateTable
CREATE TABLE "UserCompany" (
    "id" BIGSERIAL NOT NULL,
    "profileid" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "companyid" TEXT NOT NULL,
    "description" TEXT DEFAULT 'add description',
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "Domain" TEXT DEFAULT 'please provide Domain'
);

-- CreateTable
CREATE TABLE "Company" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "companyid" TEXT NOT NULL,
    "description" TEXT DEFAULT 'add description',
    "addressid" TEXT DEFAULT 'address',
    "pageid" TEXT DEFAULT 'create page',
    "type" TEXT DEFAULT 'unknone '
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" TEXT NOT NULL,
    "userid" TEXT NOT NULL,
    "certificate" TEXT DEFAULT 'add Certificate'
);

-- CreateTable
CREATE TABLE "connection" (
    "id" BIGSERIAL NOT NULL,
    "senderid" TEXT NOT NULL,
    "receiverid" TEXT NOT NULL,
    "ismutual" BOOLEAN DEFAULT false
);

-- CreateTable
CREATE TABLE "Posts" (
    "id" TEXT NOT NULL,
    "profileid" TEXT NOT NULL,
    "description" TEXT DEFAULT 'no description',
    "title" TEXT DEFAULT 'no title',
    "data" TEXT DEFAULT 'no the post data',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Like" (
    "id" TEXT NOT NULL,
    "postid" TEXT NOT NULL,
    "userid" TEXT NOT NULL,
    "type" TEXT DEFAULT 'tumbsup'
);

-- CreateTable
CREATE TABLE "Comments" (
    "id" TEXT NOT NULL,
    "postid" TEXT NOT NULL,
    "userid" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "commentLike" (
    "id" TEXT NOT NULL,
    "commentid" TEXT NOT NULL,
    "userid" TEXT NOT NULL,
    "type" TEXT DEFAULT 'tumbsup'
);

-- CreateTable
CREATE TABLE "Replay" (
    "id" TEXT NOT NULL,
    "commentid" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "userid" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "verification" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "expiretime" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_uid_key" ON "Users"("uid");

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_id_key" ON "Profile"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userid_key" ON "Profile"("userid");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_mobileNumber_key" ON "Profile"("mobileNumber");

-- CreateIndex
CREATE UNIQUE INDEX "UserEducation_id_key" ON "UserEducation"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Institution_id_key" ON "Institution"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Institution_instituteId_key" ON "Institution"("instituteId");

-- CreateIndex
CREATE UNIQUE INDEX "UserCompany_id_key" ON "UserCompany"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Company_id_key" ON "Company"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Company_companyid_key" ON "Company"("companyid");

-- CreateIndex
CREATE UNIQUE INDEX "Skill_id_key" ON "Skill"("id");

-- CreateIndex
CREATE UNIQUE INDEX "connection_id_key" ON "connection"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Posts_id_key" ON "Posts"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Like_id_key" ON "Like"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Comments_id_key" ON "Comments"("id");

-- CreateIndex
CREATE UNIQUE INDEX "commentLike_id_key" ON "commentLike"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Replay_id_key" ON "Replay"("id");

-- CreateIndex
CREATE UNIQUE INDEX "verification_id_key" ON "verification"("id");

-- CreateIndex
CREATE UNIQUE INDEX "verification_email_key" ON "verification"("email");

-- AddForeignKey
ALTER TABLE "UserEducation" ADD CONSTRAINT "UserEducation_profileid_fkey" FOREIGN KEY ("profileid") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCompany" ADD CONSTRAINT "UserCompany_profileid_fkey" FOREIGN KEY ("profileid") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Skill" ADD CONSTRAINT "Skill_userid_fkey" FOREIGN KEY ("userid") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_postid_fkey" FOREIGN KEY ("postid") REFERENCES "Posts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_postid_fkey" FOREIGN KEY ("postid") REFERENCES "Posts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "commentLike" ADD CONSTRAINT "commentLike_commentid_fkey" FOREIGN KEY ("commentid") REFERENCES "Comments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Replay" ADD CONSTRAINT "Replay_commentid_fkey" FOREIGN KEY ("commentid") REFERENCES "Comments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
