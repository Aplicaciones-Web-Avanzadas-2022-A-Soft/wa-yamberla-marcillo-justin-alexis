import { NextApiRequest, NextApiResponse } from 'next'
import {conexion} from 'src/utils/database'

type Data = {
  message: string,
  time: string
}

export default async (req: NextApiRequest, res: NextApiResponse <Data>) => {
  const respuesta = await conexion.query("SELECT NOW()");
  //await conn.end();
  console.log(respuesta);
  return res.json({message:"Hola desde database", time: respuesta.rows[0].now});
}
