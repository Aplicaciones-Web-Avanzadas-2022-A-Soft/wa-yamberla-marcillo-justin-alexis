//03-operados.js
const arreglo = [
    {
        id: 1,
        nombre: 'Adrian',
        nota: 5
    },
    {
        id: 2,
        nombre: 'Vicente',
        nota: 8
    },
    {
        id: 3,
        nombre: 'Carolina',
        nota: 14
    },
    {
        id: 4,
        nombre: 'Wendy',
        nota: 16
    },
    {
        id: 5,
        nombre: 'Andrea',
        nota: 19
    },
    {
        id: 6,
        nombre: 'Pamela',
        nota: 19
    },
    {
        id: 7,
        nombre: 'Cristian',
        nota: 20
    },
    {
        id: 8,
        nombre: 'Daniel',
        nota: 19
    },
    {
        id: 9,
        nombre: 'Lilly',
        nota: 14
    },
    {
        id: 10,
        nombre: 'Ramiro',
        nota: 12
    }
];

//Operadores: Funciones como parámetros
//find
//enviamos una expresión -> Truty Falsy
//devuelve el primero que cumpla esa condición
const respuestaFind  = arreglo.find(
    function (valorActual, indiceActual, arregloCompleto){
        console.log('valorActual', valorActual);
        console.log('indiceActual', indiceActual);
        console.log('arregloCompleto', arregloCompleto);
        return valorActual.nombre === "Cristian"; //EXPRESION ===
    }
);

console.log('respuestaFind', respuestaFind) //Resp: Cristian; si no encuentra devuelve undefined

//findindex
//enviamos una expresión -> Truty Falsy
//devuelve el primero que cumpla esa condición
const respuestaIndex  = arreglo.findIndex(
    function (valorActual, indiceActual, arregloCompleto){ //indiceActual y arregloCompleto se pueden quitar
        return valorActual.nombre === "Cristian"; //EXPRESION ===
    }
);

console.log('respuestaIndex', respuestaIndex) //Resp: indice 6; si no encuentra devuelve -1

//foreach: itera el arreglo
const respuestaForEach = arreglo.forEach(
    function (valorActual, indiceActual, arregloCompleto){
        console.log('ValorActual', valorActual);
    }
);
console.log('respuestaForEach', respuestaForEach); //undefined

//MAP: Modificar o mutar el arreglo y devuelve un nuevo arreglo
//enviamos datos del nuevo arreglo
//devuelve el nuevo arreglo

const respuestaMap = arreglo.map(
    (valorActual, indiceActual, arregloCompleto)=>{
        const nuevoElemento = {
            id: valorActual.id,
            nombre: valorActual.nombre,
            nota: valorActual.nota + 1,
            casado: false
        };
        return nuevoElemento;
    }
);
console.log('respuestaMap', respuestaMap);
console.log('arreglo', arreglo);

//Filter: filtrar el arreglo
//enviamos una expresión truty o falsy
//devuelve los elementos que cumplen esa condición
const respuestaFilter = arreglo.filter(
    (valorActual, indiceActual, arregloCompleto) =>{
        return valorActual.nota >= 14;
    }
);
console.log('respuestaFilter', respuestaFilter);
console.log('arreglo', arreglo);

//some: pasamos expresión truty o falsy
//devuelve boolean
//Hay alguna nota menor a nueve? SI o NO
//OR
const respuestaSome = arreglo.some(
    function (valorActual, indiceActual, arregloCompleto){
        return valorActual.nota < 9;
    }
);
console.log('respuestaSome', respuestaSome);

//every: pasamos expresión truty o falsy
//devuelve boolean
//Todas las notas son mayores a 14? SI o NO
//AND
const respuestaEvery = arreglo.every(
    function (valorActual, indiceActual, arregloCompleto){
        return valorActual.nota > 14;
    }
);
console.log('respuestaEvery', respuestaEvery);

//reduce: izq -> der
//reduce right: der -> izq
//100 < 3 ptos vida
//100 -1 -2 -3 -5 -6 -5 -4 -3 -1 =
// 0 1 +2 +3 +4 +5 +6 +5 +4 +3 +1 =
// [1, 2, 3, 5, 6, 5, 4 , 3, 1]
const respuestaReduce = arreglo.reduce(
    function (valorAcumulado, valorActual, arreglo){
        return (valorAcumulado + valorActual.nota);
    },
    0 //Acumulador
);
console.log('respuestaReduce', respuestaReduce); //100 - X = -46
console.log('respuestaReduce', respuestaReduce / arreglo.length); //promedio