import { librosRepo } from 'helpers/libros-repo';

export default handler;

function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return getLibroById();
        case 'PUT':
            return updateLibro();
        case 'DELETE':
            return deleteLibro();
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }

    function getLibroById() {
        const libro = librosRepo.getById(req.query.id);
        return res.status(200).json(libro);
    }

    function updateLibro() {
        try {
            librosRepo.update(req.query.id, req.body);
            return res.status(200).json({});
        } catch (error) {
            return res.status(400).json({ message: error });
        }
    }

    function deleteLibro() {
        librosRepo.delete(req.query.id);
        return res.status(200).json({});
    }
}