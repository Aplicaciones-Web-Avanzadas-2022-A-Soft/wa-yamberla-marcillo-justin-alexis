//05-destructuracion.js

//Dest5ucturacion de objetos

const justin = {
    nombre: "Justin"
};

const carolina = {
    nombre: "Carolina",
    apellido: "Eguez"
};

const adrianCarolina = { //Creando una nueva referencia
    ...carolina,    //1 El orden es importante para propiedades que se repiten
    ...justin,      //2 El ulitmo reemplaza a los anteriores
};
console.log('adrianCarolina', adrianCarolina);

//Destructuracion de arreglos
const arregloUno = [1, 2, 3, 4, 5];
const arregloDos = [6, 7, 8, 9, 10];
const superArreglo = [
    ...arregloUno, // El orden importa
    ...arregloDos,
];
console.log('superArreglo', superArreglo);
console.log(...superArreglo); //console.log(1,2,3,4,5...,10);