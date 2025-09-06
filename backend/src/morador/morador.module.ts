import { Module } from '@nestjs/common';
import { MoradorService } from './morador.service';
import { MoradoresController } from './morador.controller';

@Module({
	imports: [],
	controllers: [MoradoresController],
	providers: [MoradorService],
})
export class MoradoresModule {}
