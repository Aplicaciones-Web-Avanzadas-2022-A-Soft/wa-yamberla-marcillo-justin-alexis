const fs = require('fs')
const inquirer = require("inquirer")

const pathArchivo = './data2.txt';

function leerArchivo(path){
    let datosArchivo = fs.readFileSync(path)
    return JSON.parse(datosArchivo)
}

function escribirArchivo(path, datos){
    let objetoGuardado = JSON.stringify(datos)
    fs.writeFile(path, objetoGuardado, (error) =>{
        if(error){
            console.log('Error')
        }else{
            console.log('Archivo generado correctamente')
        }
    });
}

let autor = {
    id: 0,
    nombre: '',
    direccion: undefined,
    edad: 0,
    hijos: null,
    casado: true,
    libros: []
}

let libro = {
    id: 0,
    titulo: '',
    numeroPaginas: 0,
    genero: '',
    fechaPublicacion: '',
}

//-------------------------- CREATE AUTOR -------------------------------
async function crearAutor() {
    try {
        inquirer.prompt([
            {
                name: 'id',
                type: 'input',
                message: 'Ingrese el id: '
            },
            {
                name: 'nombre',
                type: 'input',
                message: 'Ingrese el nombre: '
            },
            {
                name: 'direccion',
                type: 'input',
                message: 'Ingrese la direccion: '
            },
            {
                name: 'edad',
                type: 'number',
                message: 'Ingrese la edad: '
            },
            {
                name: 'hijos',
                type: 'input',
                message: 'Ingrese el número de hijos: '
            },
            {
                name: 'casado',
                type: 'confirm',
                message: '¿Es casado?: '
            },
        ]).then((respuestas) => {
            let datosArrayAutores = leerArchivo(pathArchivo)

            autor.id = respuestas.id
            autor.nombre = respuestas.nombre
            autor.direccion = respuestas.direccion
            autor.edad = respuestas.edad
            autor.hijos = respuestas.hijos
            autor.casado = respuestas.casado

            datosArrayAutores.push(autor)

            escribirArchivo(pathArchivo, datosArrayAutores)

            console.log(datosArrayAutores)
        });
    }catch (e){
        console.log("Error", e)
    }
}

//-------------------------- READ AUTOR -------------------------------
const leerAutor = () =>{
    let datosArrayAutor = leerArchivo(pathArchivo)
    console.log(datosArrayAutor)
}

//-------------------------- UPDATE AUTOR -------------------------------
async function actualizarAutor() {
    try {
        inquirer.prompt([
            {
                name: 'idEditar',
                type: 'input',
                message: 'Ingrese el id del autor a editar: '
            },
            {
                name: 'nombre',
                type: 'input',
                message: 'Ingrese el nuevo nombre: '
            },
            {
                name: 'direccion',
                type: 'input',
                message: 'Ingrese la nueva direccion: '
            },
            {
                name: 'edad',
                type: 'number',
                message: 'Ingrese la nueva edad: '
            },
            {
                name: 'hijos',
                type: 'input',
                message: 'Ingrese el nuevo número de hijos: '
            },
            {
                name: 'casado',
                type: 'confirm',
                message: '¿Es casado?: '
            },
        ]).then((respuestas) => {
            let datosArrayAutores = leerArchivo(pathArchivo)

            autor.id = respuestas.idEditar
            autor.nombre = respuestas.nombre
            autor.direccion = respuestas.direccion
            autor.edad = respuestas.edad
            autor.hijos = respuestas.hijos
            autor.casado = respuestas.casado

            let indice = datosArrayAutores.findIndex(elemento =>{
                return elemento.id === respuestas.idEditar
            })

            datosArrayAutores.splice(indice, 1, autor)

            escribirArchivo(pathArchivo, datosArrayAutores)

            console.log(datosArrayAutores)
        });
    }catch (e) {
        console.log("Error", e)
    }
}

//-------------------------- DELETE AUTOR -------------------------------
async function eliminarAutor() {
    try {
        inquirer.prompt([
            {
                name: 'idEliminar',
                type: 'input',
                message: 'Ingrese el id del autor a eliminar: '
            },
        ]).then((respuestas) => {
            let datosArrayAutores = leerArchivo(pathArchivo)

            let indice = datosArrayAutores.findIndex(elemento =>{
                return elemento.id === respuestas.idEliminar
            })

            datosArrayAutores.splice(indice, 1)

            escribirArchivo(pathArchivo, datosArrayAutores)

            console.log(datosArrayAutores)
        });
    }catch (e) {
        console.log("Error", e)
    }
}

//-------------------------- CREATE LIBRO -------------------------------
async function crearLibro() {
    let datosArrayAutores = leerArchivo(pathArchivo)
    if(datosArrayAutores.length === 0){
        console.log("No existen datos. ¡Primero cree un autor y luego un libro! Saliendo...")
    }else{
        try{
            inquirer.prompt([
                {
                    name: 'idAutor',
                    type: 'input',
                    message: 'Ingrese el id del autor al cual quiere agregar un libro: '
                },
            ]).then((respuestas) => {
                let indice = datosArrayAutores.findIndex(elemento =>{
                    return elemento.id === respuestas.idAutor
                })
                if (indice === -1){
                    console.log("No existe ese Autor.")
                }else{
                    inquirer.prompt([
                        {
                            name: 'id',
                            type: 'input',
                            message: 'Ingrese el id del libro: '
                        },
                    ]).then((entradas) =>{
                        libro.id = entradas.id
                        datosArrayAutores[indice].libros.push(libro)
                        escribirArchivo(pathArchivo, datosArrayAutores)
                        console.log(datosArrayAutores)
                    })
                }
            });
        }catch (e) {
            console.log("Error", e)
        }
    }
}
//-------------------------- READ LIBRO -------------------------------
async function leerLibro() {
    let datosArrayAutores = leerArchivo(pathArchivo)
    if(datosArrayAutores.length === 0){
        console.log("No existen datos. ¡Primero cree un autor y luego un libro! Saliendo...")
    }else{
        try {
            await inquirer.prompt([
                {
                    name: 'idAutor',
                    type: 'input',
                    message: 'Ingrese el id del autor del cual quiere ver sus libros: '
                },
            ]).then((respuestas) => {
                let indice = datosArrayAutores.findIndex(elemento =>{
                    return elemento.id === respuestas.idAutor
                })
                if (indice === -1){
                    console.log("No existe ese Autor.")
                }else{
                    console.log(datosArrayAutores[indice].libros)
                }
            });
        }catch (e) {
            console.log("Error", e)
        }
    }
}

//-------------------------- UPDATE LIBRO -------------------------------
async function actualizarLibro() {
    let datosArrayAutores = leerArchivo(pathArchivo)
    if(datosArrayAutores.length === 0){
        console.log("No existen datos. ¡Primero cree un autor y luego un libro! Saliendo...")
    }else{
        try {
            inquirer.prompt([
                {
                    name: 'idAutor',
                    type: 'input',
                    message: 'Ingrese el id del autor al cual quiere actualizar sus libros: '
                },
            ]).then((respuestas) => {
                let indice = datosArrayAutores.findIndex(elemento =>{
                    return elemento.id === respuestas.idAutor
                })
                if (indice === -1){
                    console.log("No existe ese Autor.")
                }else{
                    inquirer.prompt([
                        {
                            name: 'idLibro',
                            type: 'input',
                            message: 'Ingrese el id del libro: '
                        },
                    ]).then((entradas) =>{
                        let indiceLibro = datosArrayAutores[indice].libros.findIndex(elemento =>{
                            return elemento.id === entradas.idLibro
                        })
                        if (indiceLibro === -1){
                            console.log("No existe ese Libro.")
                        }else {
                            libro.id = entradas.idLibro
                            datosArrayAutores[indice].libros.splice(indiceLibro, 1, libro)
                            escribirArchivo(pathArchivo, datosArrayAutores)
                        }
                    })
                }
            });
        }catch (e) {
            console.log("Error", e)
        }
    }
}

//-------------------------- DELETE LIBRO -------------------------------
async function eliminarLibro() {
    let datosArrayAutores = leerArchivo(pathArchivo)
    if(datosArrayAutores.length === 0){
        console.log("No existen datos. ¡Primero cree un autor y luego un libro! Saliendo...")
    }else{
        try {
            inquirer.prompt([
                {
                    name: 'idAutor',
                    type: 'input',
                    message: 'Ingrese el id del autor del cual quiere eliminar sus libros: '
                },
            ]).then((respuestas) => {
                let indice = datosArrayAutores.findIndex(elemento =>{
                    return elemento.id === respuestas.idAutor
                })
                if (indice === -1){
                    console.log("No existe ese Autor.")
                }else{
                    inquirer.prompt([
                        {
                            name: 'id',
                            type: 'input',
                            message: 'Ingrese el id del libro a eliminar: '
                        },
                    ]).then((entradas) =>{
                        libro.id = entradas.id
                        datosArrayAutores[indice].libros.splice(indice, 1)
                        escribirArchivo(pathArchivo, datosArrayAutores)
                        console.log(datosArrayAutores)
                    })
                }
            });
        }catch (e) {
            console.log("Error", e)
        }
    }
}

//-------------------------- MENU AUTOR -------------------------------
async function menuAutor (){
    inquirer.prompt([
        {
            name: 'opcion',
            type: 'list',
            message: '¿Qué desea hacer?',
            choices: [
                '1. Crear autor',
                '2. Leer autor',
                '3. Actualizar autor',
                '4. Eliminar autor',
                '5. Salir']
        },
    ]).then((respuesta) =>{
        switch (respuesta.opcion){
            case '1. Crear autor':
                crearAutor()
                break;
            case '2. Leer autor':
                leerAutor()
                break;
            case '3. Actualizar autor':
                actualizarAutor()
                break;
            case '4. Eliminar autor':
                eliminarAutor()
                break;
            case '5. Salir':
                console.log('Saliendo...')
        }
    });
}

//-------------------------- MENU LIBRO -------------------------------
async function menuLibro (){
    inquirer.prompt([
        {
            name: 'opcion',
            type: 'list',
            message: '¿Qué desea hacer?',
            choices: [
                '1. Crear libro',
                '2. Leer libro',
                '3. Actualizar Libro',
                '4. Eliminar libro',
                '5. Salir']
        },
    ]).then((respuesta) =>{
        switch (respuesta.opcion){
            case '1. Crear libro':
                crearLibro()
                break;
            case '2. Leer libro':
                leerLibro()
                break;
            case '3. Actualizar Libro':
                actualizarLibro()
                break;
            case '4. Eliminar libro':
                eliminarLibro()
                break;
            case '5. Salir':
                console.log('Saliendo...')
        }
    });
}

//-------------------------- MAIN MENU -------------------------------
async function main() {
    inquirer.prompt([
        {
            name: 'opcion',
            type: 'list',
            message: '¿Qué desea hacer?',
            choices: [
                '1. Gestionar autores',
                '2. Gestionar libros',
                '3. Salir']
        },
    ]).then((respuesta) =>{
        switch (respuesta.opcion){
            case '1. Gestionar autores':
                menuAutor()
                break;
            case '2. Gestionar libros':
                menuLibro()
                break;
            case '3. Salir':
                console.log('Saliendo...')
        }
    });
}

main()
