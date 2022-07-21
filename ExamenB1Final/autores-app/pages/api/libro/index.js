import { librosRepo } from 'helpers/libros-repo';
import {element} from "prop-types";

export default handler;

function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return getLibros();
        case 'POST':
            return createLibro();
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }

    function getLibros() {
        const libros = librosRepo.getAll();
        //const librosSoloAutor = libros.filter((elemento) => {
            //return elemento.id_autor = ""
        //})
        return res.status(200).json(libros);
    }

    function createLibro() {
        try {
            librosRepo.create(req.body);
            return res.status(200).json({});
        } catch (error) {
            return res.status(400).json({ message: error });
        }
    }
}