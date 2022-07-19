import {NextApiRequest, NextApiResponse} from "next";
import {conexion} from 'src/utils/database'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { method, query, body} = req;
    switch (method){
        case 'GET':
            try {
                const consultaSQL = "SELECT * FROM autor WHERE id_autor = $1";
                const valores = [query.id_autor]
                const resultado = await conexion.query(consultaSQL, valores);
                if (resultado.rows.length === 0){
                    return res.status(404).json({message: "Autor no encontrado"})
                }
                return res.json(resultado.rows[0])
            }catch (error: any) {
                return res.status(500).json({error: error.message })
            }

        case 'PUT':
            try {
                const {nombre_autor, direccion_autor, edad_autor, hijos_autor} = body
                const consultaSQL = "UPDATE autor SET nombre_autor=$1, direccion_autor=$2, edad_autor=$3, hijos_autor=$4 WHERE id_autor = $5";
                const valores = [nombre_autor, direccion_autor, edad_autor, hijos_autor, query.id_autor]
                const resultado = await conexion.query(consultaSQL, valores);
                if (resultado.rows.length === 0){
                    return res.status(404).json({message: "Autor no encontrado"})
                }
                return res.json(resultado.rows[0])
            }catch (error: any) {
                return res.status(500).json({error: error.message })
            }

        case 'DELETE':
            try {
                const consultaSQL = "DELETE * FROM autor WHERE id_autor = $1";
                const valores = [query.id_autor]
                const resultado = await conexion.query(consultaSQL, valores);
                if (resultado.rowCount === 0){
                    return res.status(404).json({message: "Autor no encontrado"})
                }
                return res.json(resultado.rows[0])
            }catch (error: any) {
                return res.status(500).json({error: error.message })
            }

        default:
            return res.status(400).json("Método inválido");
    }
}