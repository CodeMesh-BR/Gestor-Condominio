import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { MoradorService } from './morador.service';
import { CreateMoradorDto } from './dto/create-morador.dto';

@Controller('moradores')
export class MoradoresController {
	constructor(private readonly moradoresService: MoradorService) {}

	@Post()
	create(@Body() createMoradorDto: CreateMoradorDto) {
		return this.moradoresService.create(createMoradorDto);
	}

	@Get()
	findAll() {
		return this.moradoresService.findAll();
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.moradoresService.remove(id);
	}
}
