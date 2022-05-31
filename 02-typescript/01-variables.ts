//01-variables.ts
//npm install -g typescript
//tsc

let nombre: string = 'Justin'; //primitiva
let nombre2: String = 'Justin2' //Clase
//nombre = 1;
nombre = 'Alexis';
let edad: number = 24;
let casado: boolean = false;
let fecha: Date = new Date();
let sueldo: number;
sueldo = 3000;

//Duck typing
let apellido = 'Eguez'; //string
apellido = 'Adrian'; //igual a otros strings
apellido.toUpperCase(); //metodos string
//apellido = 1; //Error, no es un string

let marihuana: any = 2;
marihuana = '2';
marihuana = true;
marihuana = () => '2';

//se puede igualar a múltiples tipos de variables, menos a boolean
let edadMultiple: number | string | Date = 2;
edadMultiple = '2';
edadMultiple = 2222;
edadMultiple = 'dos';
edadMultiple = new Date();
//edadMultiple = true;
//edadMultiple as Date;
//edadMultiple as string
//edadMultiple as number;

