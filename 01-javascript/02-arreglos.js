//02-arreglos.js
let arreglo = [6, 7 ,8 ,9, 10];
arreglo = 1;
arreglo = true;
arreglo = undefined;
arreglo = null;
arreglo = {};
arreglo = [true, 1, 1.1, "Justin", 'Alexis', undefined, null, {}, [1, 2]];
arreglo = [6, 7 ,8 ,9, 10];

//for of: iterar valores
for (let numero of arreglo){
    console.log('numero', numero);
}
//for in: iterar indices o indices JSON
for(let indice in arreglo){
    arreglo[indice];
    console.log('indice', indice);
}
let objetoPrueba = {a: '1', b: '2', c: '3'};
for (let llave in objetoPrueba){
    console.log('llave', llave);
}

//métodos para arreglos
arreglo.push(11); //Añadir al final de un elemento
// [6, 7, 8, 9, 10, 11]

arreglo.pop(); //Eliminar al final de un elemento
// [6, 7, 8, 9, 10]

arreglo.unshift(5); //Añadir al principio de un arreglo
// [5, 6, 7, 8, 9, 10]

console.log(arreglo);

//splice(indice, numero de elementos eliminado, ...items a agregar)
// EJ arreglo.splice(0, 3, 1, 2, 3, 4, 5, 6);
arreglo.splice(0, 0, 4);
// [4, 5, 6, 7, 8, 9, 10]
console.log(arreglo);

const indiceNueve = arreglo.indexOf(9); //Encuentra el primer elemento y devuelve el indice0
arreglo.splice(indiceNueve, 2);
// [4, 5, 6, 7, 8]

console.log(arreglo);

