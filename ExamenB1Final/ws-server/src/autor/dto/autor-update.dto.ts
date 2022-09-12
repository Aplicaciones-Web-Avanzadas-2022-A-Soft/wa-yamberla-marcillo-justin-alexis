import {IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";

export class AutorUpdateDto{
    @IsOptional()
    @IsNumber()
    idAutor: number;

    @IsOptional()
    @IsString()
    nombre: string;

    @IsOptional()
    @IsString()
    direccion: string;

    @IsOptional()
    @IsNumber()
    edad: number;

    @IsOptional()
    @IsNumber()
    hijos: number;
}