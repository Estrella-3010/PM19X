// Ejercicio 1
let nombre = "Armando";
const edad = 25;

nombre = "Ana Maria";

let saludo = "hola, " + nombre + ". Tienes " + edad + " años.";
console.log(saludo);

// Ejercicio 2
const cuadrado = (numero) => {return(numero * numero);}
console.log("Resultado de la multiplicación: "+cuadrado(10));

// Ejercicio 3
const saludoPersonalizado =(nombre,edad) => {return("Hola, me llamo " + nombre + " y tengo "+ edad + " años.")}
console.log(saludoPersonalizado("Estrella", 20));