
function crearPersona (nombre, apellido){
    return{
        nombre: nombre,
        apellido: apellido
    }
};

const persona = crearPersona('Fernando', 'Ruiz');

console.log(persona);

// desde la version ECMA Script6 permite simplificar la sintaxis de las funciones, para cuando se vaya a hacer el retorno de la mismo la variable definida en los argumento, no hace falta que se especifique dos veces, ejemplo nombre: nombre

function crearPersona2 (nombre, apellido){
    return{
        nombre,
        apellido
    }
};

const persona2 = crearPersona2('Fernando', 'Ruiz');

console.log(persona2);

// Esta funcion tambien la podemos escribir como una funcion de flecha, recordar que cuando una funcion de flecha solo tiene en su bloque de codigo el return se puede obviar esto y simplificar aun más, lo que especificamos dentro de los parentesis es para decirle a Javascript que lo que queremos regresar es un objeto y no el cuerpo de la función

const crearPersona3 = (nombre, apellido)=> ({nombre,apellido});

const persona3 = crearPersona3('Fernando', 'Ruiz');

console.log(persona3);

// una funcion de flecha no crea el objeto de argumentos de manera automatica cuando esta es definida, como si pasa con las funciones tradicionales; pero si deseamos trabajar con los argumentos en una funcion de flecha, entonces se debe definir entre los parentesis ...nomb_arg los tres puntos hacen referencia al parametro Rest e indican todos los argumentos que sean enviados al invocar la función, se va a crear un arreglo con cada uno de ellos.

// Una consideración es que despues del parametro Rest no puede venir ningun argumento mas, pero si puede ir antes del parametro Rest.

const imprimirArgumentos = (...args)=>{
    console.log(args);
};

imprimirArgumentos('Fernando', 34, true, 'aprendiendo funciones de flecha');

// continuando con el ejercicio anterior, Si necesito colocar el nombre de las variables junto con sus valores, entonces la deberia definir de la siguiente manera

const imprimirArgumentos2 = (...args)=>{
    //console.log(arg);
    return args;
};

const [nombre, edad, casado, comentario]= imprimirArgumentos2('Fernando', 34, true, 'aprendiendo funciones de flecha');

console.log({nombre, edad, casado, comentario});

// Si tengo una funcion con diferentes argumentos y solo deseo imprimir una propiedad en especial, la puedo definir de la siguiente manera.

const {apellido} = crearPersona('Fernando', 'Ruiz');

console.log({apellido});

// si quiero cambiar el nombre de la variable, se coloca entre las llaves el nombre de la variable seguido de : y el nuevo nombre, como se muestra a continuación

const {apellido: nuevoApellido} = crearPersona('Fernando', 'Ruiz');

console.log({nuevoApellido}); // Tambien se coloca el nuevo nombre a la hora de imprimirlo

// si deseo definir la funcion para retornar un objeto con sus variables y valores, además de poder definir un valor por defecto cuando el valor no fue asignado a una variable, entones lo puedo definir de la siguiente manera

// Objeto
const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    //edad:40  //si no coloco esta propiedad cuando la imprima va a tomar el valor por defecto
    trajes:['Mark I', 'Mark V', 'Hulkbuster'],
};

console.log('================================================')
//definiendo la función, dentro de los parentesis coloco las variables, si quiero un valor por defecto cuando no se ingrese la variable en el objeto, entonces lo hago en la variable dentro del parentesis, en este ejemplo lo colocare en la edad, si no se ingresa la variable se tendra por defecto el 0;

// definiendo la función
const imprimirPropiedades = ({nombre, codeName, vivo, edad=0, trajes})=>{   
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad}); // como coloque la edad comentada va a imprimir la edad = 0
    console.log({trajes});
}

imprimirPropiedades(tony);