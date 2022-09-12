import {IsNumber, IsOptional, IsString} from "class-validator";

export class LibroUpdateDto{
    @IsOptional()
    @IsNumber()
    idLibro: number;

    @IsOptional()
    @IsNumber()
    idautor: number;

    @IsOptional()
    @IsString()
    titulo: string;

    @IsOptional()
    @IsNumber()
    numpaginas: number;

    @IsOptional()
    @IsString()
    genero: string;

    @IsOptional()
    @IsString()
    fechapublicacion: string;

}