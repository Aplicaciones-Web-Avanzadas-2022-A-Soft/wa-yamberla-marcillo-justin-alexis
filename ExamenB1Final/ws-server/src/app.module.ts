import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {config} from "./orm.config";
import { AutorModule } from './autor/autor.module';
import { LibroModule } from './libro/libro.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), AutorModule, LibroModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}