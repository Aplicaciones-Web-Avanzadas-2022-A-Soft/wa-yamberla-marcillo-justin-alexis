import {BadRequestException, Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query} from '@nestjs/common';
import {LibroService} from "./libro.service";
import {LibroCreateDto} from "./dto/libro-create.dto";
import {validate} from "class-validator";
import {LibroUpdateDto} from "./dto/libro-update.dto";

@Controller('libro')
export class LibroController {
    constructor(
        private readonly libroService: LibroService
    ) {
    }

    @Get("/")
    @HttpCode(200)
    find(
        @Query() queryParams,
        @Param() params
    ) {
        return this.libroService.find({})
    }

    @Get("/:id") //GET --> libro/#-numero
    @HttpCode(200)
    findOneById(
        @Query() queryParams,
        @Param() params
    ) {
        return this.libroService.findOneById(+params.id);
    }

    @Post("/") //POST --> nota/
    @HttpCode(201)
    async create(
        @Query() queryParams,
        @Param() params,
        @Body() bodyParams
    ) {
        const nuevoRegistro = new LibroCreateDto();
        nuevoRegistro.idLibro = bodyParams.idLibro;
        nuevoRegistro.idautor = bodyParams.iautor;
        nuevoRegistro.titulo = bodyParams.titulo;
        nuevoRegistro.numpaginas = bodyParams.numpaginas;
        nuevoRegistro.genero= bodyParams.genero;
        nuevoRegistro.fechapublicacion = bodyParams.fechapublicacion;

        const errores = await validate(nuevoRegistro);
        if (errores.length > 0) {
            console.error({errores});
            throw new BadRequestException({mensaje: 'Envio mal los datos'})
        }
        return this.libroService.create(nuevoRegistro);
    }

    @Put("/:id") //POST --> libro/
    @HttpCode(201)
    async update(
        @Query() queryParams,
        @Param() params,
        @Body() bodyParams
    ) {
        const actualizarRegistro = new LibroUpdateDto();
        actualizarRegistro.idLibro = bodyParams.idLibro;
        actualizarRegistro.idautor = bodyParams.iautor;
        actualizarRegistro.titulo = bodyParams.titulo;
        actualizarRegistro.numpaginas= bodyParams.numpaginas;
        actualizarRegistro.genero = bodyParams.genero;
        actualizarRegistro.fechapublicacion = bodyParams.fechapublicacion;

        const errores = await validate(actualizarRegistro);
        if (errores.length > 0) {
            console.error({errores});
            throw new BadRequestException({mensaje: 'Envio mal los datos'})
        }
        return this.libroService.update(actualizarRegistro, +params.id);
    }

    @Delete("/:id") //DELETE --> libro/#-numero
    @HttpCode(201)
    delete(
        @Query() queryParams,
        @Param() params,
        @Body() bodyParams
    ) {
        return this.libroService.delete(+params.id);
    }
}