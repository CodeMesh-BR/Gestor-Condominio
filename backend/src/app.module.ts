import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AvisosModule } from './avisos/avisos.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
	imports: [PrismaModule, AvisosModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
