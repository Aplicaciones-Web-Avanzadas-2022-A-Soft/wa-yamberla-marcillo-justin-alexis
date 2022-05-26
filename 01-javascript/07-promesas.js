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

promesaEsPar(21)
.then( //return
    (respuesta) =>{
        console.log("Respuesta: ", respuesta)
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