import { Module } from '@nestjs/common';
import { LibroController } from './libro.controller';
import { LibroService } from './libro.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {LibroEntity} from "./libro.entity";

@Module({
    imports:[
        TypeOrmModule.forFeature(
            [LibroEntity]
        )
    ],
    controllers: [LibroController],
    providers: [LibroService]
})
export class LibroModule {}