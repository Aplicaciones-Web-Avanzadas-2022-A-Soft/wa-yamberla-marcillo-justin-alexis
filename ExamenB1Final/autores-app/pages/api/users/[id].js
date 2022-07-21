import { autoresRepo } from 'helpers';

export default handler;

function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return getUserById();
        case 'PUT':
            return updateUser();
        case 'DELETE':
            return deleteUser();
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }

    function getUserById() {
        const autor = autoresRepo.getById(req.query.id);
        return res.status(200).json(autor);
    }

    function updateUser() {
        try {
            autoresRepo.update(req.query.id, req.body);
            return res.status(200).json({});
        } catch (error) {
            return res.status(400).json({ message: error });
        }
    }

    function deleteUser() {
        autoresRepo.delete(req.query.id);
        return res.status(200).json({});
    }
}
