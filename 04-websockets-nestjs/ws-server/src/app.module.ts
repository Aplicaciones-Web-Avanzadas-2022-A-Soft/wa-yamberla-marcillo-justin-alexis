import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {EventosModule} from './eventos/eventos.module'
import {TypeOrmCoreModule} from "@nestjs/typeorm/dist/typeorm-core.module";
import {UsuarioEntity} from "./usuario/usuario.entity";
import {NotaEntity} from "./nota/nota.entity";
import {UsuarioModule} from "./usuario/usuario.module";
import {NotaModule} from "./nota/nota.module";


// Modulo principal
@Module({
  imports: [
      EventosModule,
      TypeOrmCoreModule.forRoot({
          name: 'default', //nombre de la conexion
          type: 'sqlite',
          database: './bdd/bdd.sqlite',
          entities: [UsuarioEntity, NotaEntity], //entidades del aplicativo
          synchronize: true,
          dropSchema: true,
      }),
      UsuarioModule,
      NotaModule
  ], //  Otros modulos - Agrupador
  controllers: [AppController], // Controladores - HTTP Validaciones
  providers: [AppService], // Servicios - Logica de negocio
})
export class AppModule {}