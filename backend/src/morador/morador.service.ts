import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMoradorDto } from './dto/create-morador.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MoradorService {
	constructor(private prisma: PrismaService) {}

	async create(createMoradorDto: CreateMoradorDto) {
		const morador = await this.prisma.morador.create({
			data: {
				nome: createMoradorDto.nome,
				sobrenome: createMoradorDto.sobrenome,
				telefone: createMoradorDto.telefone,
				bloco: createMoradorDto.bloco,
				apto: createMoradorDto.apto,
			},
		});

		return morador;
	}

	async findAll() {
		return this.prisma.morador.findMany({
			orderBy: {
				nome: 'asc',
			},
		});
	}

	async remove(id: string) {
		return this.prisma.morador.delete({
			where: {
				id: id,
			},
		});
	}
}
