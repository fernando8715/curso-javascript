/*
* El objetivo principal de las funciones es centralizar la logica de un procedimiento que podemos reutilizar varias veces, lo unico que se necesitaria es llamar la funcion cuando la necesitemos.
* Un mmetodo es una funcion que se encuentra dentro de un objeto.
* Las funciones comunes se definen con parentesis (), para llamar la funcion se coloca el nombre de la funcion y los parentesis.
* Otra forma de definir funciones es hacerlo con una constante
*/


function saludar(){
    console.log('Hola Mundo')
};

saludar(); // llama la funcion e imprime el hola mundo que se definio en la funcion

// esta es una funcion anonima porque la funicion no tiene nombre, pero al asignarselo a una constante esta funcion va a responder al nombre de saludar2. al crear funciones de esta manera sirve para no cambiar el valor de la constante en la aplicacion, es como una medida de seguridad.

const saludar2 = function(){
    console.log('Hola Mundo 2');
};

saludar2();

// Los argumentos permiten que se envien valores una vez se este llamando a la función

function saludar3(nombre){
    console.log('Hola ' + nombre);
};

saludar3('Fernando'); // envio el argumento y me va a imprimir en consola este dato cuando llamo la función

// Si coloco mas argumentos de los que se definieron en la funcion y al llamar la funcion esto no va a imprimirlos.
// todas las funciones tradicionales que es colocando la palabra function, tienen un objeto implicito llamado arguments, este va a hacer referencia a todos los elementos que son colocados al llamar la funcion pero no estan definidos como parametros. 

function saludar4(nombre){
    console.log(arguments);
    console.log('Hola ' + nombre);
};

saludar4('Fernando', 40, true, 'Costa Rica'); // imprime los demas argumentos en forma de arreglo

//==========================================================================

/*
* Las funciones de flecha permiten crear funciones de manera mas corta usando 
* const nombreFuncion ()=>{}
*/

const saludarFlecha= ()=>{
    console.log('Saludo implementando la función flecha');
};

saludarFlecha();

//enviando argumentos 
const saludarFlecha2= (nombre)=>{
    console.log(nombre + ', Saludos implementando la función flecha');
    console.log('===================================================0')
};

saludarFlecha2('Fernando');

/*
* todas las funciones retornan un valor y no son las impresiones en consola, si no se define un retorno, estas regresan un undefined.
* Todo el codigo que este despues del return jamas se va a ejecutar
* Las funciones de flecha permiten resumir la funcion quitando las llaves cuando el bloque solo tiene una instrucción y es el return, haciendolo en una sola linea.
*/

const retornoFunciones= (nombre)=>{
    console.log(nombre + ', implementando el retorno de una funcion');
    return 10;
    console.log(nombre + ', implementando el retorno de una funcion'); // esto nunca se va a ejecutar porque esta despues de return
};

const retornoFuncion = retornoFunciones ('Fernando');
console.log({retornoFuncion});
console.log(retornoFuncion);

function sumar (a, b){
    return a + b;
}

// estos valores van a pasar a la funcion y se va a realizar la suma que esta establecida en el return y ese valor me regresa la función
console.log(sumar(1, 3)); 

// Si solo se tiene una linea de codigo que es el return, la funcion se puede simplificar de esta manera, haciendo que el codigo sea más limpio, ordenado y más efiiciente para javaScript
const sumar2 = (a, b) => a + b;

console.log(sumar2(2, 5));

// Otro ejemplo de una funcion de flecha anonima que esta simplificada en una sola linea
const getAleatorio = ()=> Math.random();

console.log(getAleatorio());












