import {
    BadRequestException,
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    Post,
    Put,
    Query
} from "@nestjs/common";
import {NotaService} from "./nota.service";
import {NotaCreateDto} from "./dto/nota-create.dto";
import {validate} from "class-validator";
import {NotaUpdateDto} from "./dto/nota-update.dto";

@Controller('nota')
export class NotaController {
    // Inyectar las dependencias
    constructor(
        private readonly notaService: NotaService
    ) {}

    // 1 Informativo
    // 2 OK
    // 3 Redireccion
    // 4 Error cliente
    // 5 Error servidor

    // parametros:
    // 1 QueryParams ?id=1&consulta=Adrian
    // 2 BodyParams (viajan en el formulario)
    // 3 Parametros de ruta /usuario/:id/notas

    @Get("/") // GET /nota/
    @HttpCode(200)
    find(
        @Query() queryParams,
        @Param() params
    ){
        return this.notaService.find({});
    }

    @Get("/:id") // GET /nota/1
    @HttpCode(200)
    findOneById(
        @Query() queryParams,
        @Param() params
    ){
        return this.notaService.findOneById(+params.id);
    }

    @Post("/") // POST /nota
    @HttpCode(201)
    async create(
        @Query() queryParams,
        @Param() params,
        @Body() bodyParams
    ){
        const nuevoRegistro = new NotaCreateDto(); //creamos dto
        nuevoRegistro.notaPrimerBimestre = bodyParams.notaPrimerBimestre;
        nuevoRegistro.notaSegundoBimestre = bodyParams.notaSegundoBimestre;
        nuevoRegistro.notaExamenFinal= bodyParams.notaExamenFinal;
        nuevoRegistro.comentario= bodyParams.comentario;
        nuevoRegistro.usuario= +bodyParams.usuario;

        const errores = await validate(nuevoRegistro); //validamos
        if (errores.length > 0){
            console.error({errores});
            throw new BadRequestException({mensaje: 'Envió mal los datos'})
        }
        //creamos
        return this.notaService.create(nuevoRegistro);
    }

    @Put("/:id") // PUT /nota/:id
    @HttpCode(200)
    async update(
        @Query() queryParams,
        @Param() params,
        @Body() bodyParams
    ){
        const registroEditar = new NotaUpdateDto(); // creamos dto
        registroEditar.notaExamenFinal = bodyParams.notaExamenFinal;
        registroEditar.notaPrimerBimestre = bodyParams.notaPrimerBimestre;
        registroEditar.notaSegundoBimestre = bodyParams.notaSegundoBimestre;
        registroEditar.usuario = bodyParams.usuario;
        registroEditar.comentario = bodyParams.comentario;

        const errores = await validate(registroEditar); // validamos
        if(errores.length > 0){
            console.error({errores});
            throw new BadRequestException({mensaje:'Envio mal datos'});
        }
        // Creamos
        return this.notaService.update(
            bodyParams,
            +params.id
        );
    }

    @Delete("/:id") // DELETE /nota/:id
    @HttpCode(200)
    delete(
        @Query() queryParams,
        @Param() params,
        @Body() bodyParams
    ){
        return this.notaService.delete(+params.id);
    }
}