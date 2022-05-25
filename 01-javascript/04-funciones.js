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
funcionSinNombre1();
funcionSinNombre2();
funcionSinNombre3();

//funciones anonimas (flecha gorda) - fat arrow function

// Funciones anonimas - Fat Arrow Functions
const funcionFatArrow1 = () => {};
var funcionFatArrow2 = () => {};
let funcionFatArrow3 = () => {};
[].forEach(()=>{})
funcionFatArrow1();
funcionFatArrow2();
funcionFatArrow3();

const funcionFatArrow4 = () => {};
const funcionFatArrow5 = (x) => {
    return x + 1;
};
const funcionFatArrow6 = (x) => x + 1;  // FAT ARROW FUNCTIONS
                                        // Una sola linea
                                        // Omito Return
                                        // Omito llaves
const funcionFatArrow7 = x => x + 1;    // SI SOLO TENEMOS UN PARAMETRO
                                        // Omito los parentesis
const funcionFatArrow8 = (x,y,z) => x + y + z;


// ... = > Parametros infinitos que llegan en un arreglo
//         Solo se puede tener una de estas por funcion
function sumarNumeros(...otrosNumeros) { // Parametros Inf [2,3,4,5,...]
    let total = 0;
    otrosNumeros.forEach(
        (valorActual) => {
            total = total + valorActual;
        }
    );
    return total;
    // return otrosNumeros.reduce((a, v) => a + v, 0);
}
sumarNumeros(1,2,3,4,5,6,7,8,9,10,11,12,13)