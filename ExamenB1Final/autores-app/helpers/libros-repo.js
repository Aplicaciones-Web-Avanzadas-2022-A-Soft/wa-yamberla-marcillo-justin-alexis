import {fetchWrapper} from "./fetch-wrapper";

const fs = require('fs');

let libros = require('data/libros.json');

export const librosRepo = {
    getAll,
    getById,
    getAllByAutorId,
    create,
    update,
    delete: _delete
};

function getAll() {
    return libros
}

function getAllByAutorId(id_autor) {
    return libros = libros.filter(x => x.id_autor.toString() !== id_autor.toString());
}

function getById(id) {
    return libros.find(x => x.id.toString() === id.toString());
}

function create({ id_autor, titulo, numeroPaginas, genero, fechaPublicacion }) {
    const libro = { id_autor, titulo, numeroPaginas, genero, fechaPublicacion };

    // validate
    if (libros.find(x => x.id === libro.id))
        throw `El Libro de nombre ${libro.id} ya existe`;

    // generate new user id
    libro.id = libros.length ? Math.max(...libros.map(x => x.id)) + 1 : 1;

    // add and save user
    libros.push(libro);
    saveData();
}

function update(id, { id_autor, titulo, numeroPaginas, genero, fechaPublicacion }) {
    const params = { id_autor, titulo, numeroPaginas, genero, fechaPublicacion };
    const libro = libros.find(x => x.id.toString() === id.toString());

    // update and save
    Object.assign(libro, params);
    saveData();
}

// prefixed with underscore '_' because 'delete' is a reserved word in javascript
function _delete(id) {
    // filter out deleted user and save
    libros = libros.filter(x => x.id.toString() !== id.toString());
    saveData();

}

// private helper functions

function saveData() {
    fs.writeFileSync('data/libros.json', JSON.stringify(libros, null, 4));
}