import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AvisosService } from './avisos.service';
import { CreateAvisoDto } from './dto/create-aviso.dto';

@Controller('avisos')
export class AvisosController {
	constructor(private readonly avisosService: AvisosService) {}

	@Post()
	create(@Body() createAvisoDto: CreateAvisoDto) {
		return this.avisosService.create(createAvisoDto);
	}

	@Get()
	findAll() {
		return this.avisosService.findAll();
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.avisosService.remove(id);
	}
}
