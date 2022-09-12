import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {AutorEntity} from "./autor.entity";
import {FindManyOptions, Repository} from "typeorm";
import {AutorCreateDto} from "./dto/autor-create.dto";
import {AutorUpdateDto} from "./dto/autor-update.dto";

@Injectable()
export class AutorService {
    constructor(
        @InjectRepository(AutorEntity)
        public autorRepository: Repository<AutorEntity>
    ) {
    }

    find(opciones: FindManyOptions<AutorEntity>){
        return this.autorRepository.find(opciones)
    }

    findOneById(id: number) {
        return this.autorRepository.findOne({
            where: {
                idautor: id
            },
        })
    }

    create(datosCrear: AutorCreateDto) {
        return this.autorRepository.save(datosCrear);
    }

    update(datosActualizar: AutorUpdateDto , id: number) {
        return this.autorRepository.save(
            {...datosActualizar, id}
        );
    }

    delete(id: number) {
        return this.autorRepository.delete(id);
    }

}