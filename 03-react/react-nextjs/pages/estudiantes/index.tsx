import Layout from "../../components/Layout";
import {useEffect, useState} from "react";

export interface EstudianteInterface{
    id: number;
    nombre: string;
}

export default function Estudiantes() {
    const [ arregloEstudiantes, setArregloEstudiantes ] = useState([] as EstudianteInterface[])
    useEffect( //Iniciar componente
        () => {
            //consultar API...
            const arregloConsultado = [
                {id: 1, nombre: 'Justin'},
                {id: 2, nombre: 'Alexis'},
            ] as EstudianteInterface[];
            setArregloEstudiantes([...arregloEstudiantes, ...arregloConsultado])
        },
        []
    )

    return(
        <Layout title={'Estudiantes'}>
            <ul>
                {arregloEstudiantes.map(
                    (estudiante) => {
                        return (<li key={estudiante.id}>{estudiante.nombre}</li>)
                    }
                )}
            </ul>
        </Layout>
    )
}