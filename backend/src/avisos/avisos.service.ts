import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAvisoDto } from './dto/create-aviso.dto';

@Injectable()
export class AvisosService {
	constructor(private prisma: PrismaService) {}

	async create(createAvisoDto: CreateAvisoDto) {
		const aviso = await this.prisma.aviso.create({
			data: {
				titulo: createAvisoDto.titulo,
				conteudo: createAvisoDto.conteudo,
				nivelImportancia: createAvisoDto.nivelImportancia,
			},
		});

		return aviso;
	}

	async findAll() {
		return this.prisma.aviso.findMany({
			orderBy: {
				createdAt: 'desc',
			},
		});
	}

	async remove(id: string) {
		return this.prisma.aviso.delete({
			where: {
				id: id,
			},
		});
	}
}
