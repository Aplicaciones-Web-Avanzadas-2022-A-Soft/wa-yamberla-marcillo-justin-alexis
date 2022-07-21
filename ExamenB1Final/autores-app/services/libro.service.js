import { apiUrl } from 'config';
import { fetchWrapper } from 'helpers';

export const libroService = {
    getAll,
    getById,
    getAllByAutorId,
    create,
    update,
    delete: _delete
};

const baseUrl = `${apiUrl}/libro`;

function getAll() {
    return fetchWrapper.get(baseUrl);
}

function getAllByAutorId() {
    return fetchWrapper.get(baseUrl);
}

function getById(id) {
    return fetchWrapper.get(`${baseUrl}/${id}`);
}

function create(params) {
    return fetchWrapper.post(baseUrl, params);
}

function update(id, params) {
    return fetchWrapper.put(`${baseUrl}/${id}`, params);
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(id) {
    return fetchWrapper.delete(`${baseUrl}/${id}`);
}
