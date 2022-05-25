const fs = require('fs'); //file system

//06-ejemplo.txt -> Hola

/*console.log('PRIMERO');
fs.readFile(
    './06-ejemplo.txt', //1
    'utf-8',
    (error, contenido) => {
        console.log('SEGUNDO');
    }
);

console.log('TERCERO')*/

// EJERCICIO
//1) Leer archivo: 06-ejemplo.txt, luego imprimir en consola
// 2) Después del paso 1, Leer archivo: 01-variables.js, luego imprimir en consola

fs.readFile(
    './06-ejemplo.txt', //1
    'utf-8',
    (error, contenido) => {
        console.log(contenido);
    }
);

fs.readFile(
    './01-variables.js', //2
    'utf-8',
    (error, contenido) => {
        console.log(contenido);
    }
);
