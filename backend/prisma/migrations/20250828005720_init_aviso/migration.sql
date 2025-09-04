-- CreateEnum
CREATE TYPE "public"."NivelImportancia" AS ENUM ('NORMAL', 'IMPORTANTE', 'URGENTE');

-- CreateEnum
CREATE TYPE "public"."StatusAviso" AS ENUM ('ATIVO', 'ENCERRADO');

-- CreateTable
CREATE TABLE "public"."Aviso" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "conteudo" TEXT NOT NULL,
    "nivelImportancia" "public"."NivelImportancia" NOT NULL DEFAULT 'NORMAL',
    "status" "public"."StatusAviso" NOT NULL DEFAULT 'ATIVO',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Aviso_pkey" PRIMARY KEY ("id")
);
