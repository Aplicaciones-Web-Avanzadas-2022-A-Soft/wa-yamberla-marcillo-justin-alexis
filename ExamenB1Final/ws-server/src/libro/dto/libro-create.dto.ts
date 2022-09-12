import {IsNotEmpty, IsNumber, IsString} from "class-validator";


export class LibroCreateDto{
    @IsNotEmpty()
    @IsNumber()
    idLibro: number;

    @IsNotEmpty()
    @IsNumber()
    idautor: number;

    @IsNotEmpty()
    @IsString()
    titulo: string;

    @IsNotEmpty()
    @IsNumber()
    numpaginas: number;

    @IsNotEmpty()
    @IsString()
    genero: string;

    @IsNotEmpty()
    @IsString()
    fechapublicacion: string;
}