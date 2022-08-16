import { IsNumber, IsOptional } from "class-validator";

export class NotaUpdateDto{
    @IsOptional()
    @IsNumber()
    notaPrimerBimestre: number;

    @IsOptional()
    @IsNumber()
    notaSegundoBimestre: number;

    @IsOptional()
    @IsNumber()
    notaExamenFinal: number;

    @IsOptional()
    @IsNumber()
    comentario: string;

    @IsOptional()
    @IsNumber()
    usuario: number;
}