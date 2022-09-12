import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import  {LibroEntity} from "./libro.entity";
import {FindManyOptions, Repository} from "typeorm";
import {LibroCreateDto} from "./dto/libro-create.dto";
import {LibroUpdateDto} from "./dto/libro-update.dto";

@Injectable()
export class LibroService {
    constructor(
        @InjectRepository(LibroEntity)
        public libroRepository: Repository<LibroEntity>
    ) {
    }

    find(opciones: FindManyOptions<LibroEntity>) {
        return this.libroRepository.find(opciones)
    }

    findOneById(id: number) {
        return this.libroRepository.findOne({
            where: {
                idlibro: id
            },
        })
    }

    create(datosCrear: LibroCreateDto) {
        return this.libroRepository.save(datosCrear);
    }

    update(datosActualizar: LibroUpdateDto, id: number) {
        return this.libroRepository.save(
            {...datosActualizar, id}
        );
    }

    delete(id: number) {
        return this.libroRepository.delete(id);
    }


}