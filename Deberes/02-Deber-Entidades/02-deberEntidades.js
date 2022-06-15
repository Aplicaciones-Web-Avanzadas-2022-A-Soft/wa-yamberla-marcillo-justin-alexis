const inquirer = require("inquirer");
const fs = require('fs');

let autor = {
    nombre: 'John Katzenbach',
    direccion: undefined,
    edad: 71,
    hijos: null,
    casado: true,
    libros: []
};

let libro = {
    id: 0,
    titulo: '',
    fechaPublicacion: '',
    numeroPaginas: 0,
    genero: '',
};

//------------------------ CREATE --------------------------------
const crearLibro = () =>{
    inquirer.prompt([
        {
            name: 'id',
            type: 'input',
            message: 'Ingrese el id: '
        },
        {
            name: 'titulo',
            type: 'input',
            message: 'Ingrese el titulo: '
        },
        {
            name: 'fechaPublicacion',
            type: 'input',
            message: 'Ingrese la fecha de publicación: '
        },
        {
            name: 'numPaginas',
            type: 'input',
            message: 'Ingrese el número de páginas: '
        },
        {
            name: 'genero',
            type: 'input',
            message: 'Ingrese el género: '
        },
    ]).then((respuestas) => {
        libro.id = respuestas.id
        libro.titulo = respuestas.titulo
        libro.fechaPublicacion = respuestas.fechaPublicacion
        libro.numeroPaginas = respuestas.numPaginas
        libro.genero = respuestas.genero

        autor.libros.push(libro)
        let objetoGuardado = JSON.stringify(autor)
        fs.writeFile('./data.txt', objetoGuardado, (error) =>{
            if(error){
                console.log('Error')
            }else{
                console.log('Archivo generado correctamente')
            }
        })

        console.log(autor)
    });
}

//------------------------- READ ---------------------------------
const leerLibro = () =>{
    let datosArchivo = fs.readFileSync('./data.txt')
    let datosAutor = JSON.parse(datosArchivo)
    console.log(datosAutor)
}
//------------------------- UPDATE -------------------------------
const actualizarLibro = () =>{
    inquirer.prompt([
        {
            name: 'id',
            type: 'input',
            message: 'Ingrese el nuevo id: '
        },
        {
            name: 'titulo',
            type: 'input',
            message: 'Ingrese el nuevo titulo: '
        },
        {
            name: 'fechaPublicacion',
            type: 'input',
            message: 'Ingrese la nueva fecha de publicación: '
        },
        {
            name: 'numPaginas',
            type: 'input',
            message: 'Ingrese el nuevo número de páginas: '
        },
        {
            name: 'genero',
            type: 'input',
            message: 'Ingrese el nuevo género: '
        },
    ]).then((respuestas) => {
        let datosArchivo = fs.readFileSync('./data.txt')
        let datosAutor = JSON.parse(datosArchivo)

        libro.id = respuestas.id
        libro.titulo = respuestas.titulo
        libro.fechaPublicacion = respuestas.fechaPublicacion
        libro.numeroPaginas = respuestas.numPaginas
        libro.genero = respuestas.genero
        datosAutor.libros = libro

        let objetoGuardado = JSON.stringify(datosAutor)
        fs.writeFile('./data.txt', objetoGuardado, (error) =>{
            if(error){
                console.log('Error')
            }else{
                console.log('Archivo actualizado correctamente')
            }
        })
        console.log(datosAutor)
    });
}

//------------------------- DELETE -------------------------------
const eliminarLibro = () =>{
    libro = {}
    autor.libros = libro
    let objetoGuardado = JSON.stringify(autor)
    fs.writeFile('./data.txt', objetoGuardado, (error) =>{
        if(error){
            console.log('Error')
        }else{
            console.log('Libro eliminado correctamente')
        }
    })
}

//------------------------ MENU -----------------------------
const menu = () =>{
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
                console.log('Saliendo')
        }
    });
}
/*
const menuSalida = () =>{
    inquirer.prompt([
        {
            name: 'opcionSalida',
            type: 'confirm',
            message: 'Desea realizar alguna acción más?'
        },
    ]).then((respuesta) =>{
        if(respuesta.opcionSalida){
            menu();
        }else {
            console.log('ADIOS');
        }
    });
}*/

menu();