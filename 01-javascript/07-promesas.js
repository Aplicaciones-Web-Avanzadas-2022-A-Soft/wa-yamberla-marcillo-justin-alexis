//07-promesas.js
const fs = require('fs');

//envolver dentro de una función

function promesaEsPar(numero){
    const miPrimeraPromesa = new Promise( //Definición de la promesa
        (
            resolve, //funcion return
            reject   //funcio  throw
        ) => {
            if (numero % 2 === 0){
                resolve(numero);  //return numerop -> resolve() : return undefined
            }else {
                reject('No es par :(')  //Throw: 'No es par :('
            }

        }
    )
    return miPrimeraPromesa
}

function promesaElevarAlCuadrado(numero) {
    const miPrimerPromesa = new Promise( // Definicion de la promesa
        (resolve, reject) => {
            const numeroElevadoAlCuadrado = Math.pow(numero, 2);
            resolve(numeroElevadoAlCuadrado); // return numeroElevadoAlCuadrado
        }
    );
    return miPrimerPromesa
}

promesaEsPar(4)
.then( //return
    (numeroPar)=>{
        return promesaElevarAlCuadrado(numeroPar)// OTRA PROMESA
    }
)
    .then( //return
        (numeroParElevadoAlCuadrado)=>{
            console.log('numeroParElevadoAlCuadrado', numeroParElevadoAlCuadrado)
        }
    )
.catch( //throw
    (error) =>{
        console.error('Error: ', error)
    }
)
.finally( //finally
    ()=>{
        console.info('Fin');
    }
)