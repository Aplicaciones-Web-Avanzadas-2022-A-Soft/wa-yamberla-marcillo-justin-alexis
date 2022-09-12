import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {LibroEntity} from "../libro/libro.entity";

@Entity({name: 'autor'})
export class AutorEntity {
    @PrimaryGeneratedColumn()
    idautor: number;

    @Column({
        name: 'nombre',
        type: "varchar",
        length: 50,
        nullable: false,
    })
    nombre: string;

    @Column({
        name: 'direccion',
        type: "varchar",
        length: 50,
        nullable: false,
    })
    direccion: string;

    @Column({
        name: 'edad',
        type: 'integer',
        nullable: false,
    })
    edad: number;

    @Column({
        name: 'hijos',
        type: 'integer',
        nullable: false,
    })
    hijos: number;

    @OneToMany(
        () => LibroEntity, //Entidad Relacionada
        (libro) => libro.idautor
    )
    digimon: LibroEntity[]
}