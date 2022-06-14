const inquirer = require("inquirer");

let autor = {
    nombre: 'John',
    apellido: 'Katzenbach',
    edad: 71,
    hijos: null,
    casado: true,
    libros: []
};

let libro;

//funcion para eliminar al autor
const eliminarAutor = () =>{
    autor = {}
    eliminarLibro();
}

//funcion para crear el libro
const crearLibro = () =>{
    inquirer.prompt([
        {
            name: 'titulo',
            type: 'input',
            message: 'Ingrese el titulo:'
        },
    ]).then((respuestas) => {
        autor.libros = respuestas.titulo;
    });
}
//funcion para eliminar el libro
const eliminarLibro = () =>{
    libro = {
        titulo: '',
        genero: '',
        numeroPaginas: '',
        editorial: '',
        fechaPublicacion: ''
    }
}

//menu
const menu = () =>{
    inquirer.prompt([
        {
            name: 'opcion',
            type: 'list',
            message: '¿Qué desea hacer?',
            choices: ['1. Crear libro', '2. Leer libro', '3. Salir']
        },
    ]).then((respuesta) =>{
        switch (respuesta.opcion){
            case '1. Crear libro':
                crearLibro()
                menuSalida()
            break;
            case '2. Leer libro': console.log('Leyendo...')
            break;
        }
    });
}

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
            console.log(autor);
        }
    });
}

menu();