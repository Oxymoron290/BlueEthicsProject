-- CreateEnum
CREATE TYPE "RequestMethodType" AS ENUM ('WEB', 'EMAIL', 'MAIL', 'SELF');

-- CreateEnum
CREATE TYPE "FeedbackStatus" AS ENUM ('SUSTAINED', 'PENDING', 'NOT_SUSTAINED');

-- CreateEnum
CREATE TYPE "CommunicationType" AS ENUM ('PHONE', 'TEXT', 'EMAIL', 'MAIL');

-- CreateEnum
CREATE TYPE "RecordResultType" AS ENUM ('COPY', 'INSPECTION');

-- CreateEnum
CREATE TYPE "RecordStatus" AS ENUM ('NEW', 'PENDING', 'AG_RULING', 'IN_REVIEW', 'CLOSED');

-- CreateTable
CREATE TABLE "RequestMethod" (
    "id" SERIAL NOT NULL,
    "type" "RequestMethodType" NOT NULL,
    "location" TEXT NOT NULL,
    "organizationId" INTEGER NOT NULL,

    CONSTRAINT "RequestMethod_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Organization" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "addressId" INTEGER NOT NULL,

    CONSTRAINT "Organization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" SERIAL NOT NULL,
    "address1" TEXT NOT NULL,
    "address2" TEXT,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "county" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "company" TEXT,
    "originalRequestId" INTEGER NOT NULL,
    "organizationId" INTEGER,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Record" (
    "id" SERIAL NOT NULL,
    "originationDate" TIMESTAMP(3),
    "organizationId" INTEGER NOT NULL,
    "requestMethodId" INTEGER NOT NULL,
    "originalRequestId" INTEGER NOT NULL,
    "status" "RecordStatus" NOT NULL,

    CONSTRAINT "Record_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OriginalRequest" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "mailingAddressId" INTEGER NOT NULL,
    "emailAddress" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "preferredCommunication" "CommunicationType" NOT NULL,
    "policeRecords" BOOLEAN NOT NULL,
    "description" TEXT NOT NULL,
    "attachments" TEXT[],
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "results" "RecordResultType" NOT NULL,

    CONSTRAINT "OriginalRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Response" (
    "id" SERIAL NOT NULL,
    "method" TEXT NOT NULL,
    "from" TEXT NOT NULL,
    "to" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "attachments" TEXT[],
    "recordId" INTEGER NOT NULL,

    CONSTRAINT "Response_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PersonnelRecord" (
    "id" SERIAL NOT NULL,
    "subjectId" INTEGER NOT NULL,
    "foiaRequestId" INTEGER NOT NULL,

    CONSTRAINT "PersonnelRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Complaint" (
    "id" SERIAL NOT NULL,
    "attachments" TEXT[],
    "description" TEXT NOT NULL,
    "status" "FeedbackStatus" NOT NULL,
    "personnelRecordId" INTEGER NOT NULL,

    CONSTRAINT "Complaint_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Commendation" (
    "id" SERIAL NOT NULL,
    "attachments" TEXT[],
    "description" TEXT NOT NULL,
    "status" "FeedbackStatus" NOT NULL,
    "personnelRecordId" INTEGER NOT NULL,

    CONSTRAINT "Commendation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CaseFile" (
    "id" SERIAL NOT NULL,
    "caseNumber" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "CaseFile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Assignment" (
    "id" SERIAL NOT NULL,
    "lead" BOOLEAN NOT NULL,
    "name" TEXT NOT NULL,
    "badge" TEXT NOT NULL,
    "assignedOn" TIMESTAMP(3) NOT NULL,
    "dismissedOn" TIMESTAMP(3),
    "dismissalReason" TEXT,
    "caseFileId" INTEGER NOT NULL,

    CONSTRAINT "Assignment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Incident" (
    "id" SERIAL NOT NULL,
    "incidentNumber" TEXT NOT NULL,
    "dateReported" TIMESTAMP(3) NOT NULL,
    "dateOccured" TIMESTAMP(3) NOT NULL,
    "offence" TEXT NOT NULL,
    "caseFileId" INTEGER NOT NULL,

    CONSTRAINT "Incident_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Narrative" (
    "id" SERIAL NOT NULL,
    "author" TEXT NOT NULL,
    "narrative" TEXT NOT NULL,
    "caseFileId" INTEGER NOT NULL,

    CONSTRAINT "Narrative_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subject" (
    "id" SERIAL NOT NULL,
    "employeeId" INTEGER,
    "titleName" TEXT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "middleName" TEXT,
    "nickName" TEXT,
    "department" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "positionTitle" TEXT NOT NULL,
    "ethnicity" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "accrualProfile" TEXT,
    "employeeStatus" TEXT,
    "dateHired" TIMESTAMP(3) NOT NULL,
    "separationDate" TIMESTAMP(3),
    "salary" DOUBLE PRECISION NOT NULL,
    "certifiedOfficer" BOOLEAN NOT NULL,
    "currentlyEmployed" BOOLEAN NOT NULL,
    "complaints" INTEGER NOT NULL,
    "sustainedComplaints" INTEGER NOT NULL,
    "pendingComplaints" INTEGER NOT NULL,
    "commendations" INTEGER NOT NULL,

    CONSTRAINT "Subject_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Organization_addressId_key" ON "Organization"("addressId");

-- CreateIndex
CREATE UNIQUE INDEX "OriginalRequest_mailingAddressId_key" ON "OriginalRequest"("mailingAddressId");

-- AddForeignKey
ALTER TABLE "RequestMethod" ADD CONSTRAINT "RequestMethod_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Organization" ADD CONSTRAINT "Organization_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Record" ADD CONSTRAINT "Record_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Record" ADD CONSTRAINT "Record_requestMethodId_fkey" FOREIGN KEY ("requestMethodId") REFERENCES "RequestMethod"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Record" ADD CONSTRAINT "Record_originalRequestId_fkey" FOREIGN KEY ("originalRequestId") REFERENCES "OriginalRequest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OriginalRequest" ADD CONSTRAINT "OriginalRequest_mailingAddressId_fkey" FOREIGN KEY ("mailingAddressId") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Response" ADD CONSTRAINT "Response_recordId_fkey" FOREIGN KEY ("recordId") REFERENCES "Record"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonnelRecord" ADD CONSTRAINT "PersonnelRecord_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonnelRecord" ADD CONSTRAINT "PersonnelRecord_foiaRequestId_fkey" FOREIGN KEY ("foiaRequestId") REFERENCES "Record"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Complaint" ADD CONSTRAINT "Complaint_personnelRecordId_fkey" FOREIGN KEY ("personnelRecordId") REFERENCES "PersonnelRecord"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commendation" ADD CONSTRAINT "Commendation_personnelRecordId_fkey" FOREIGN KEY ("personnelRecordId") REFERENCES "PersonnelRecord"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assignment" ADD CONSTRAINT "Assignment_caseFileId_fkey" FOREIGN KEY ("caseFileId") REFERENCES "CaseFile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Incident" ADD CONSTRAINT "Incident_caseFileId_fkey" FOREIGN KEY ("caseFileId") REFERENCES "CaseFile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Narrative" ADD CONSTRAINT "Narrative_caseFileId_fkey" FOREIGN KEY ("caseFileId") REFERENCES "CaseFile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
