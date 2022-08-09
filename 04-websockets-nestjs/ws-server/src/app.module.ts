import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {EventosModule} from './eventos/eventos.module'
import {TypeOrmCoreModule} from "@nestjs/typeorm/dist/typeorm-core.module";
import {UsuarioEntity} from "./usuario/usuario.entity";

@Module({
  imports: [
      EventosModule,
      TypeOrmCoreModule.forRoot({
          name: 'default', //nombre de la conexion
          type: 'sqlite',
          database: './bdd/bdd.sqlite',
          entities: [UsuarioEntity], //entidad del aplicativo
          synchronize: true,
          dropSchema: true,
      })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}