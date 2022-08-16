import {Module} from "@nestjs/common";
import {NotaService} from "./nota.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {NotaEntity} from "./nota.entity";
import {NotaController} from "./nota.controller";

// Modulo Nota
@Module({
    imports: [
        TypeOrmModule.forFeature(
            [NotaEntity], //Entidad en este modulo
            'default' // nombre de la conexion
        )
    ],
    providers: [NotaService],
    exports: [NotaService],
    controllers:[NotaController]
})
export class NotaModule{

}