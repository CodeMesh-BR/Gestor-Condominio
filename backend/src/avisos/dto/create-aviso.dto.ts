import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { NivelImportancia } from '@prisma/client';

export class CreateAvisoDto {
	@IsString()
	@IsNotEmpty()
	titulo: string;

	@IsString()
	@IsNotEmpty()
	conteudo: string;

	@IsEnum(NivelImportancia)
	@IsOptional()
	nivelImportancia?: NivelImportancia;
}
