import {BadRequestException, Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query} from '@nestjs/common';

import {AutorService} from "./autor.service";
import {AutorCreateDto} from "./dto/autor-create.dto";
import {validate} from "class-validator";

@Controller('autor')
export class AutorController {
    constructor(
        private readonly autorService: AutorService
    ) {}

    @Get("/") // GET /autor
    @HttpCode(200)
    find(
        @Query() queryParams,
        @Param() params
    ){
        return this.autorService.find({});
    }

    @Get("/:id") // GET /autor/1
    @HttpCode(200)
    findOneById(
        @Query() queryParams,
        @Param() params
    ){
        return this.autorService.findOneById(+params.id); // +"1" = 1
    }

    @Post("/") // POST /autor
    @HttpCode(201)
    async create(
        @Query() queryParams,
        @Param() params,
        @Body() bodyParams
    ){
        const nuevoRegistro = new AutorCreateDto(); // creamos dto
        nuevoRegistro.idAutor = bodyParams.idAutor;
        nuevoRegistro.nombre = bodyParams.nombre;
        nuevoRegistro.direccion = bodyParams.direccion;
        nuevoRegistro.edad = bodyParams.edad;
        nuevoRegistro.hijos = bodyParams.hijos;

        const errores = await validate(nuevoRegistro); // validamos
        if(errores.length > 0){
            console.error({errores});
            throw new BadRequestException({mensaje:'Envio mal datos'});
        }
        // Creamos
        return this.autorService.create(nuevoRegistro);
    }

    @Put("/:id") // PUT /autor/:id
    @HttpCode(200)
    update(
        @Query() queryParams,
        @Param() params,
        @Body() bodyParams
    ){
        return this.autorService.update(
            bodyParams,
            +params.id
        );
    }

    @Delete("/:id") // DELETE /usuario/:id
    @HttpCode(200)
    delete(
        @Query() queryParams,
        @Param() params,
        @Body() bodyParams
    ){
        return this.autorService.delete(+params.id);
    }
}