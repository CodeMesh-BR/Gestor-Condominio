import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateMoradorDto {
	@IsString()
	@IsNotEmpty()
	nome: string;

	@IsString()
	@IsOptional()
	sobrenome: string;

	@IsString()
	@IsNotEmpty()
	telefone: string;

	@IsString()
	@IsNotEmpty()
	bloco: string;

	@IsString()
	@IsNotEmpty()
	apto: string;
}
