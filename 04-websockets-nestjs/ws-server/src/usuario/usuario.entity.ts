import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {NotaEntity} from "../nota/nota.entity";

@Entity({name: 'user_usuario'})
export class UsuarioEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'user_nombres',
        type: 'varchar',
        length: 60,
        nullable: false,
    })
    nombres: string;

    @Column({
        name: 'user_apellidos',
        type: 'varchar',
        length: 60,
        nullable: false,
    })
    apellidos: string;

    @Column({
        name: 'user_rol',
        type: 'varchar',
        length: 1,
        default: 'U',
        nullable: false,
        comment: 'U=usuario: A=administrador'
    })
    rol: string;

    @OneToMany( //Uno a muchos del papá al hijo
        () => NotaEntity, //Entidad relacionada
        (nota) => nota.usuario, //Campo relacionado
        //{cascade: true}
    )
    notas: NotaEntity[]
}