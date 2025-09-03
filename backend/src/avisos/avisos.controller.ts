import { Body, Controller, Get, Post } from '@nestjs/common';
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
}
