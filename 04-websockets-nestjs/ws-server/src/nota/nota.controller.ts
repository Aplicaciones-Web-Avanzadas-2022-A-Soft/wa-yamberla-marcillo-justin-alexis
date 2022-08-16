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

    @Post("/:id") // POST /nota
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
        nuevoRegistro.usuario= bodyParams.usuario;

        const errores = await validate(nuevoRegistro); //validamos
        if (errores.length > 0){
            console.error({errores});
            throw new BadRequestException({mensaje: 'Envió mal los datos'})
        }
        //creamos
        return this.notaService.create(bodyParams);
    }

    @Put("/:id") // PUT /nota/:id
    @HttpCode(200)
    update(
        @Query() queryParams,
        @Param() params,
        @Body() bodyParams
    ){
        return this.notaService.update(bodyParams, +params.id);
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