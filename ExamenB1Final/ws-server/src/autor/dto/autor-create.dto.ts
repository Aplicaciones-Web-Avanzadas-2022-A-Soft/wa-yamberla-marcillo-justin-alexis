import {IsNotEmpty, IsNumber, IsString} from "class-validator";

export class AutorCreateDto {
    @IsNotEmpty()
    @IsNumber()
    idAutor: number;

    @IsNotEmpty()
    @IsString()
    nombre: string;

    @IsNotEmpty()
    @IsString()
    direccion: string;

    @IsNotEmpty()
    @IsNumber()
    edad: number;

    @IsNotEmpty()
    @IsNumber()
    hijos: number;
}