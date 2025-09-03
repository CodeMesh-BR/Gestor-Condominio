import { Module } from '@nestjs/common';
import { AvisosController } from './avisos.controller';
import { AvisosService } from './avisos.service';

@Module({
	imports: [],
	controllers: [AvisosController],
	providers: [AvisosService],
})
export class AvisosModule {}
