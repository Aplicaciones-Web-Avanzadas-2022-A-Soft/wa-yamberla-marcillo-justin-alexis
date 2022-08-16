import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../usuario/usuario.entity";

@Entity({name: 'user_nota'})

export class NotaEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'user_nota_primer_bimestre',
        type: 'integer',
        nullable: true,
    })
    notaPrimerBimestre: number;

    @Column({
        name: 'user_nota_segundo_bimestre',
        type: 'integer',
        nullable: true,
    })
    notaSegundoBimestre: number;

    @Column({
        name: 'user_nota_examen_final',
        type: 'integer',
        nullable: true,
    })
    notaExamenFinal: number;

    @Column({
        name: 'user_comentario',
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    comentario: string;

    @ManyToOne( //Uno a muchos del hijo al papá
        () => UsuarioEntity, //Entidad relacionada
        (user) => user.notas, //Campo relacionado
        {onDelete: "CASCADE"} //Si se elimina el usuario, se elimina las// notas
    )
    usuario: UsuarioEntity | number;
}