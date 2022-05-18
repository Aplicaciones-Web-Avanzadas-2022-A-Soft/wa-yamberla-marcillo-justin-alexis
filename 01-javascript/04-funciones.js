// 04-funciones.js

//JS permite el uso de funciones sin validaciones
/*
soloNumeros('v', true, [1,2,3])
soloNumeros((a) -> a, (a) -> a, (a) -> a)
soloNumeros(1, 2, 3, 6, 7, 7, 8, 9)
soloNumeros()
*/
function soloNumeros(a, b, c){
    return a - b + c; // valor a devolver
}

function soloLetras(a, b, c){ //undefined
    console.log(a, b, c)
}

//funciones nombradas - named functions
function funcionNombrada(){}

//funciones anónimas - anonymous functions
//se pueden ejecutar si se igualan a una variable
const funcionSinNombre1 = function(){};
var funcionSinNombre2 = function(){};
let funcionSinNombre3= function(){};
[].forEach(()=>{})
//funciones anonimas (flecha gorda) - fat arrow function
var funcionFlechaGorda1 = () => {};
let funcionFlechaGorda2= () => {};
