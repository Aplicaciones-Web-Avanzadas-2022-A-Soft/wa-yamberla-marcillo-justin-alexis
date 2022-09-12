import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {AutorEntity} from "../autor/autor.entity";

@Entity({name: 'libro'})
export class LibroEntity {
    @PrimaryGeneratedColumn()
    idlibro: number;

    @Column({
        name: 'idautor',
        type: "integer",
        nullable: false,
    })
    idautor: number;

    @Column({
        name: 'titulo',
        type: "varchar",
        length: 50,
        nullable: false,
    })
    titulo: string;

    @Column({
        name: 'numpaginas',
        type: "integer",
        nullable: false,
    })
    numpaginas: number;

    @Column({
        name: 'genero',
        type: 'varchar',
        length: 50,
        nullable: false,
    })
    genero: string;

    @Column({
        name: 'fechapublicacion',
        type: 'varchar',
        length: 50,
        nullable: false,
    })
    fechapublicacion: string;

}