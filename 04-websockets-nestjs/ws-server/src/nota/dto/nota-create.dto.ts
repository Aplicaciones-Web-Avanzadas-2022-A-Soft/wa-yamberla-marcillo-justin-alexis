import { IsNotEmpty, IsNumber } from "class-validator";

export class NotaCreateDto{
    @IsNotEmpty()
    @IsNumber()
    notaPrimerBimestre: number;

    @IsNotEmpty()
    @IsNumber()
    notaSegundoBimestre: number;

    @IsNotEmpty()
    @IsNumber()
    notaExamenFinal: number;

    @IsNotEmpty()
    @IsNumber()
    comentario: string;

    @IsNotEmpty()
    @IsNumber()
    usuario: number;
}