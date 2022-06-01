const fs = require('fs');

function ejercicio(
    pathPrimerArchivo,
    pathSegundoArchivo,
    pathNuevoArchivo
) {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                pathPrimerArchivo, // Nombre o path del archivo
                'utf-8', // codificacion
                (errorLecturaPrimerArchivo, contenidoPrimerArchivo) => {
                    if (errorLecturaPrimerArchivo) {
                        console.error(errorLecturaPrimerArchivo);
                        reject('Error leyendo primer archivo');
                    } else {

                        fs.readFile(
                            pathSegundoArchivo, // Nombre o path del archivo
                            'utf-8', // codificacion
                            (errorLecturaSegundoArchivo, contenidoSegundoArchivo) => {
                                if (errorLecturaSegundoArchivo) {
                                    console.error(errorLecturaSegundoArchivo);
                                    reject('Error leyendo segundo archivo');
                                } else {
                                    const nuevoContenido = contenidoPrimerArchivo + contenidoSegundoArchivo;
                                    fs.writeFile(
                                        pathNuevoArchivo,
                                        nuevoContenido,
                                        (errorEscritura) => {
                                            if (errorEscritura) {
                                                console.error(errorEscritura);
                                                reject('Error escribiendo nuevo archivo');
                                            } else {
                                                resolve('Completado');
                                            }
                                        }
                                    );
                                }
                            }
                        );
                    }

                }
            );
        }
    )
}

ejercicio('archivo1.txt', 'archivo2.txt', 'nuevoArchivo.txt')
    .then(
        respuesta => {
            console.log(respuesta);
        }
    )
    .catch(
        error => {
            console.log(error);
        }
    )