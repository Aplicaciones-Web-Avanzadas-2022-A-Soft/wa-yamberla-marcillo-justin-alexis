import { NextApiResponse, NextApiRequest } from "next";
import {conexion} from 'src/utils/database'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { method, body } = req;
    switch (method){
        case 'POST':
            try {
                const {nombre_autor, direccion_autor, edad_autor, hijos_autor} = body;
                const query = "INSERT INTO autor(nombre_autor, direccion_autor, edad_autor, hijos_autor) VALUES ($1, $2, $3, $4);"
                const valores = [nombre_autor, direccion_autor, edad_autor, hijos_autor]
                const respuesta = await conexion.query(query, valores);
                console.log(respuesta)
                return res.status(200).json(respuesta.rows[0]);
            }catch (error: any) {
                return res.status(400).json({error: error.message })
            }
        case 'GET':
            try {
                const query = "SELECT * FROM autor;"
                const respuesta = await conexion.query(query);
                return res.status(200).json(respuesta.rows[0]);
            }catch (error: any) {
                return res.status(400).json({error: error.message })
            }
        default:
            return res.status(400).json("Método inválido");
    }
}

