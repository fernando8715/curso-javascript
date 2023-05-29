// console.log('Hola Mundo');

console.log(miNuevoNombre);


let a = 10,
    b = 20,
    c = 'Hola',
    d = 'Spider man',
    x = a + b;

const saludo = c + d;

// console.log(a); // imprime solo el valor de la variable pero no el nombre de esta
// console.log({b}); // imprime el nombre de la variable como un objeto y el valor, sin escribir tanto codigo
// console.log({c});
// console.log({d});
// console.log({x});

// console.table({a, b, c, d, x}); // esta instruccion imprime todos los elementos como un objeto
//console.table([a, b, c, d, x]); // esta instruccion imprime todos los elementos como un arreglo

// var miNombre = 'Fernando'; // no crear variables con var

// El let y el const no sobrescriben las variables en window 
// let outerWidth =1000000; 
// const outerHeight = 800;

// en Js la variable que no este definida tiene el valor por defecto undefined
// var miNuevoNombre = 'Fernando Ruiz';

// utilizando la palabra let y no se inicializa la variable antes de llamarse genera un error, por eso se recomienda usar el let y el const. 


/** 
 * shift + alt      copia lineas de codigo
 * control + }      comenta lineas de codigo
 * alt + z          El texto permanece visible en la pantalla sin tener que deslizar la pantalla
 * ctrl + tab       cambia entre pestañas
 * alt + flecha arriba o abajo     mueve una linea de codigo arriba o abajo
 * ctrl + p         permite buscar la linea que tiene un error colocando :y el numero de la linea
 * ctrl + shift + i abre la consola cuando se esta en el navegador de chrome 
 * "! y tab"        para crear el codigo inicial de html
 * 
 * 
 * El console.time lo puedo utilizar para medir el rendimiento de una linea de codigo
 * 
 * ===================  El manejo del DOM ===================================== 
 * se hace a traves de la instruccion document, para acceder a un elemento del docuemnto se hace referencia al document.queryselector() esta funcion me devuelve el primer elemento que especifiquemos, sea por el tag, la clase o el id. desde ahi podemos modificarlo.
 * Para que sea mas eficiente el uso del DOM es buena practica asignar la referencia a una constante para que cada vez que hagamos referencia a un elemento el sistema no tenga que cargar todo el documento html linea por linea.
 * 
 * ejemplo: const titulo = document.querySelector(.titulo)
 * 
 * document.body // hago referencia al body
 * 
 * Manipulacion del DOM para crear elementos que no existen en el HTML
 * 
 * refresco la pagina parq que cargue el html
 * const divBotones = document.querySelector('#botones'); // para ingresar un boton
 *  
 * const crearBoton = document.createElement('button'); // crea una variable con la referencia para crear un elemento
 * 
 * divBotones.append(crearBoton); // inserta un boton en la direccion divBotones
 * 
 * Como los objetos se pasan por referencia, solo debo llamar a crearBoton para ir modificandolo
 * crearBoton.innerText = 'Salir'; // ingresando un nombre
 * 
 * crearBoton.classList.add('btn'); // colocando una clase de boostrap para los botones
 * crearBoton.classList.add('btn-danger'); // colocando una color
 * 
 * El patron modulo se realiza colocando una funcion anonima autoinvocada
 * (funcion(){})();  o en funcion de flecha (()=>{})();
 * esta funcion permite que el codigo sea mas seguro y hace que el codigo sea más limpio
 * 
 * 
 * Node permite correr codigo de javaScript en el servidor, lo que permite crear tanto el front end como el back-end en lenguaje JS. pero tambien en node podemos trabajar con nuetra computadora como si fuera un servidor de desarrollo y poder realizar tareas automaticas
 * Node nos permite desarrollar de manera local en nuestro equipo, babel es uno de los muchos paquetes que estan creados para simplemente utilizarlos y son gratis. 
 * 
 * El webpack es un empaquetador de modulos, que nos ayudara a realizar muchos trabajos de manera automatica  
 * 
    */