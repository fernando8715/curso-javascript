/*
* Propiedades y metodos basicos que tienen los arreglos, los metodos son funciones que vienen internas de los arreglos y las propiedades son como una variable que tienen dentro de los arreglos.
*/

let juegos = ['Zelda', 'Mario', 'Crash', 'Donkey Kong'];
console.log('largo: ', juegos.length); //largo del arreglo

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1]; //hace referencia a la ultima posición del arreglo

console.log({ primero, ultimo }); //imprime los datos del arrgleo con los nombres de variable

// El forEach()=> va a ejecutar una instruccion por cada uno de los elementos del arreglo
juegos.forEach((elemento, indice, arr) => {
    console.log({ elemento, indice, arr })
});

// El metodo push coloca un elemento al final del arreglo y devuelve la longitud del arreglo

let nuevaLongitud = juegos.push('Crazy Taxi');
console.log({ nuevaLongitud, juegos });

// El metodo unshift ingresa un numero al inicio del arreglo

nuevaLongitud = juegos.unshift('Fifa 10');
console.log({nuevaLongitud, juegos});

// El metodo pop permite eliminar el ultimo elemento del arreglo, no recibe parametros y regresa el elemento eliminado

let elemento = juegos.pop();
console.log({elemento, juegos});

// el metodo splice permite borrar elementos en cualquier posición

console.log(juegos);
let juegosBorrados = juegos.splice(1,2);
console.log({juegosBorrados, juegos});

// El metodo indexOf me retorna el indice del elemento y se coloca como parametro el elemento a buscar


console.log(juegos);
let crashIndice = juegos.indexOf('Crash', 0);
console.log({crashIndice, juegos});