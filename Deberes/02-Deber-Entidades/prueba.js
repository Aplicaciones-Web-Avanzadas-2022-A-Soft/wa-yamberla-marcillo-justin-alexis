const fs = require('fs')
const inquirer = require("inquirer")

/*function escribirArchivo(pathEscritura, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(
            pathEscritura,
            data,
            (errorEscritura) => {
                if (errorEscritura) {
                    reject(errorEscritura)
                } else {
                    resolve("Ejecutado satisfactoriamente")
                }
            })
    })
}*/

/*function leerArchivo(pathLectura) {
    return new Promise((resolve, reject) => {
        fs.readFile(
            pathLectura,
            'utf-8',
            (errorLectura, contenido) => {
                if (errorLectura) {
                    reject(errorLectura)
                } else {
                    resolve(contenido)
                }
            })
    })
}*/

function leerArchivo(path){
    let datosArchivo = fs.readFileSync(path)
    return JSON.parse(datosArchivo)
}

function escribirArchivo(path, objetoGuardado){
    fs.writeFile(path, objetoGuardado, (error) =>{
        if(error){
            console.log('Error')
        }else{
            console.log('Archivo generado correctamente')
        }
    });
}

let autor = {
    nombre: '',
    direccion: undefined,
    edad: 0,
    hijos: null,
    casado: true,
    libros: []
};

let arrayAutores = []

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
                message: 'Ingrese el numero de hijos: '
            },
            {
                name: 'casado',
                type: 'confirm',
                message: '¿Es casado?: '
            },
        ]).then((respuestas) => {
            let datosAutor = leerArchivo('./data2.txt')

            autor.id = respuestas.id
            autor.nombre = respuestas.nombre
            autor.direccion = respuestas.direccion
            autor.edad = respuestas.edad
            autor.hijos = respuestas.hijos
            autor.casado = respuestas.casado

            arrayAutores.push(autor)


            let objetoGuardado = JSON.stringify(arrayAutores)
            escribirArchivo('./data2.txt', objetoGuardado)
        });
    }catch (e){
        console.log("Error", e)
    }
}

crearAutor()

