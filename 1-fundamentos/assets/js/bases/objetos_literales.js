/*
* Los objetos literales son aquellos que tienen pares de valores, se identifican por el uso de llaves { }
* Los valores dendro de un objeto se separan por comas
* Un objeto puede contener otros objetos o arreglos.
* Para imprimir la información de un objeto se utiliza la notación de punto o tambien la notación entre llaves cuadradas y dentro de ellas entre comillas sencillas se coloca el nombre de la propiedad. ejemplo: console.log('nombre', personaje['nombre']
*/

let personaje = {
    nombre: 'Fernando',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords:{
        lat: 34.034,
        lon: 118.70
    },
    trajes:['Mark I', 'Mark V', 'Hulkbuster'],
    direccion:{
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    }
};

console.log(personaje);
console.log('nombre:', personaje.nombre);
console.log('nombre:', personaje['nombre']); // otra manera de imprimir el nombre
console.log('edad:', personaje.edad);
console.log('coordenadas:', personaje.coords);
console.log('Latitud:', personaje.coords.lat);
console.log('Longitud:', personaje.coords.lon);
console.log('No. Trajes:', personaje.trajes.length);
console.log('Ultimo Traje:', personaje.trajes[personaje.trajes.length-1]); //imprime el ultimo dato del arreglo

const x = 'vivo'; // esta constante la puedo utilizar para obtener información de un objeto, esto ayuda para trabajar de fomra dinamica con los objetos.

console.log('vivo:', personaje[x]); //la constante x va a ir al objeto y va a devolver la información.

//Borrar una propiedad
delete personaje.edad;
console.log(personaje); //compruebo que la edad no existe

// Crear una nueva propiedad del objeto
personaje.casado = 'true';
console.log(personaje)

//mostrar el objeto como un arreglo de pares de valores
const entriesPares = Object.entries(personaje);
console.log(entriesPares);

// Funcion que no permite que un objeto no pueda ser modificado (Object.Freeze), lo congela, pero no a los objetos que estan dentro de este. para bloquearlo se debe llamar a ese objeto 
Object.freeze(personaje);
personaje.dinero = 100000000000;
console.log(personaje); // el objeto no fue modificado

// coloca las propiedades del objeto en forma de arreglo
const propiedades = Object.getOwnPropertyNames(personaje);
console.log(propiedades);

// coloca los valores del objeto en forma de arreglo
const valores = Object.values(personaje);
console.log(valores);

// Para mas información de las propiedades de los objetos puede visitar la url
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object









