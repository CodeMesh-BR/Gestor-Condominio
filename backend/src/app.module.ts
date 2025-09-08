import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AvisosModule } from './avisos/avisos.module';
import { PrismaModule } from './prisma/prisma.module';
import { MoradoresModule } from './morador/morador.module';

@Module({
	imports: [PrismaModule, AvisosModule, MoradoresModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
