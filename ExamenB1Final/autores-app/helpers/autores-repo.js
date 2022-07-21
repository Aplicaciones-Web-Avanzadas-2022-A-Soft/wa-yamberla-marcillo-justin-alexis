const fs = require('fs');

let autores = require('data/users.json');

export const autoresRepo = {
    getAll,
    getById,
    getLibros,
    create,
    update,
    delete: _delete
};

function getAll() {
    return autores;
}

function getById(id) {
    return autores.find(x => x.id.toString() === id.toString());
}

function getLibros(id){
    return autores[id].libros
}

function create({ nombre, direccion, edad, hijos }) {
    const autor = { nombre, direccion, edad, hijos };

    // validate
    if (autores.find(x => x.nombre === autor.nombre))
        throw `El Autor de nombre ${autor.nombre} ya existe`;

    // generate new user id
    autor.id = autores.length ? Math.max(...autores.map(x => x.id)) + 1 : 1;

    // add and save user
    autores.push(autor);
    saveData();
}

function update(id, { nombre, direccion, edad, hijos }) {
    const params = { nombre, direccion, edad, hijos };
    const autor = autores.find(x => x.id.toString() === id.toString());
    
    // update and save
    Object.assign(autor, params);
    saveData();
}

// prefixed with underscore '_' because 'delete' is a reserved word in javascript
function _delete(id) {
    // filter out deleted user and save
    autores = autores.filter(x => x.id.toString() !== id.toString());
    saveData();
    
}

// private helper functions

function saveData() {
    fs.writeFileSync('data/users.json', JSON.stringify(autores, null, 4));
}