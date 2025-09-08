-- CreateTable
CREATE TABLE "public"."Morador" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "bloco" TEXT NOT NULL,
    "apto" TEXT NOT NULL,

    CONSTRAINT "Morador_pkey" PRIMARY KEY ("id")
);
