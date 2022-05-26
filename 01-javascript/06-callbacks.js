const fs = require('fs'); //file system: Importar módulo

//06-ejemplo.txt -> Hola

/*console.log('PRIMERO');

fs.readFile(
    './06-ejemplo.txt', //Nombre del archivo
    'utf-8',            //Codificación
    (error, contenido) => {
        console.log('SEGUNDO');
    }
);

console.log('TERCERO')*/

// EJERCICIO
// Link info fs: https://nodejs.dev/learn/the-nodejs-fs-module
// 1) Leer archivo: 06-ejemplo.txt, luego imprimir en consola
// 2) Después del paso 1, Leer archivo: 01-variables.js, luego imprimir en consola
/*
fs.readFile(
    './06-ejemplo.txt', //1
    'utf-8',
    (errorLectura1, contenidoPrimerArchivo) => {
        if(errorLectura1){
            console.log('Error leyendo el primer archivo');
            throw new Error('ERROR LEYENDO PRIMER ARCHIVO');
        }else {
            fs.readFile(
                './01-variables.js', //2
                'utf-8',
                (errorLectura2, contenidoSegundoArchivo) => {
                    if(errorLectura2){
                        console.log('Error leyendo el segundo archivo');
                        throw new Error('ERROR LEYENDO SEGUNDO ARCHIVO');
                    }else {
                        console.log(contenidoPrimerArchivo, contenidoSegundoArchivo);
                    }
                }
            );
        }
    }
);
*/

// 3) Crear un nuevo archivo llamado 06-nuevo-archivo.txt con el contenido de los otros dos archivos.

/* fs.writeFile(
    'nombreArchivo()Path',
    'contenidoArchivo',
    (errorEscritura)=>{

    }
); */

fs.readFile(
    './06-ejemplo.txt', // Nombre o path del archivo
    'utf-8', // codificacion
    (errorLecturaPrimerArchivo, contenidoPrimerArchivo) => {
        if(errorLecturaPrimerArchivo){
            console.error(errorLecturaPrimerArchivo);
            throw new Error('Error leyendo primer archivo');
        }else{

            fs.readFile(
                './01-variables.js', // Nombre o path del archivo
                'utf-8', // codificacion
                (errorLecturaSegundoArchivo, contenidoSegundoArchivo) => {
                    if(errorLecturaSegundoArchivo){
                        console.error(errorLecturaSegundoArchivo);
                        throw new Error('Error leyendo primer archivo');
                    }else{
                        const nuevoContenido = contenidoPrimerArchivo + contenidoSegundoArchivo;
                        fs.writeFile(
                            './06-nuevo-archivo.txt',
                            nuevoContenido,
                            (errorEscritura)=>{
                                if(errorEscritura){
                                    console.error(errorEscritura);
                                    throw new Error('Error escribiendo nuevo archivo');
                                }else{
                                    console.log('Completado');
                                }
                            }
                        );
                    }
                }
            );
        }

    }
);