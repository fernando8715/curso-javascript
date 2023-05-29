/*
* En javascript todos los objetos son pasados por referencia y los primitivos se pasan por valor.
* las variables primitivas como se pasan por valor no se afecta el lugar de memoria
* ------- investigar formas de romper la relacion con los arreglos y los objetos ---------
*/

let juan = { nombre: 'Juan'};
let ana = juan;

console.log({juan, ana}); // tanto en nombre de juan como el de ana son juan

ana.nombre = 'Ana';
console.log({juan, ana}); // cambia el valor de juan porque los objetos se pasan por referencia

/* existe un operador especial para separar todas las propiedades y los valores de un objeto y ese ooperador se conoce como spread y son tres puntos ... cuando se coloca entre llaves { } y [ ] 

Cuando se coloca los tres puntos en los argumentos dentro de los parentesis es un parametro rest, que lo que hace es unir todos los parametros en un arreglo
*/

let camilo = { nombre: 'Camilo'};
let andrea = {...juan}; 
andrea.nombre = 'Andrea'

console.log({camilo, andrea}); 

// utilizando el operador spread en una funcion usando objetos

const cambiarNombre = ({...persona}) =>{
    persona.nombre = 'Tony';
    return persona;
}

let peter = {nombre: 'Peter'};
let tony = cambiarNombre(peter);

console.log({peter, tony});

console.log('\n====================================================');
// para romper la relación utilizando el operador spread con arreglos, se utiliza los tres puntos dentro de las llaves seguido del nombre del arreglo
const frutas = ['Manzana', 'Pera', 'Piña'];

console.time('tiempo con spread');
const otrasFrutas = [...frutas] // rompe la relacion del arreglo para no pasarlo por referencia
console.timeEnd('tiempo con spread');

otrasFrutas.push('Mango'); // agregando un nuevo elemento al arreglo otrasFrutas

console.table({frutas, otrasFrutas});

// Otra manera de romper la relación en los arreglos es con el metodo slice.

console.time('tiempo con slice');
const otrasFrutas2 = frutas.slice();
console.timeEnd('tiempo con slice')

otrasFrutas2.push('Mango'); 

console.table({frutas, otrasFrutas2});

// para verificar cual es mas eficiente si el spread o el slice se puede comprobar utilizando el console.time para el inicio y el console.timeEnd para el tiempo final

// se puede ver que en estas instrucciones el operador spread es más eficiente que el metodo slice