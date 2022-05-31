//01-variables.ts
//npm install -g typescript
//tsc
var nombre = 'Justin'; //primitiva
var nombre2 = 'Justin2'; //Clase
//nombre = 1;
nombre = 'Alexis';
var edad = 24;
var casado = false;
var fecha = new Date();
var sueldo;
sueldo = 3000;
//Duck typing
var apellido = 'Eguez'; //string
apellido = 'Adrian'; //igual a otros strings
apellido.toUpperCase(); //metodos string
//apellido = 1; //Error, no es un string
var marihuana = 2;
marihuana = '2';
marihuana = true;
marihuana = function () { return '2'; };
//se puede igualar a múltiples tipos de variables, menos a boolean
var edadMultiple = 2;
edadMultiple = '2';
edadMultiple = 2222;
edadMultiple = 'dos';
edadMultiple = new Date();
//edadMultiple = true;
//edadMultiple as Date;
//edadMultiple as string
//edadMultiple as number;
