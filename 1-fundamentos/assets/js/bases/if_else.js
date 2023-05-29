/*
* el doble igual == me va a comparar que un dato es igual a otro, no importa de que tipo sean, uno puede ser string con el valor a 5 y el otro puede ser un numero con valor a 5 y el resultado sera true

* el triple igual === me va a comparar dos datos tanto el tipo del dato como el valor, si uno es string y el otro es numero el resultado va a ser false o si son del mismo tipo pero con diferente valor va a retornar un false
*/

const hoy = new Date();

let dia = hoy.getDay();

console.log(dia); // 0: Domingo, 1: lunes, 2: martes .....

if (dia === 0 ){
    console.log('Hoy es domingo');
}else{
    console.log('Hoy no es domingo')
}

// comprobando lo que hace el == como hoy es domingo el valor es 0, pero lo estoy comparando con un dato string y me va a imprimir en consola un true aunque uno sea de tipo numerico y el otro de tipo texto

console.log(dia == '0'); 

// Hacer una actividad para obtener en consola el dia de la semana sin usar if else o swich, unicamente objetos o arreglos para realizar la misma tarea e imprimir en consola el dia de la semana

// con arreglo
let diasSemana = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado',];
console.log(diasSemana[dia] || 'Dia invalido');

// con objeto

const diasSemana2 = {
    0: 'domingo',
    1: 'lunes', 
    2: 'martes', 
    3: 'miercoles', 
    4: 'jueves', 
    5: 'viernes', 
    6: 'sabado', 
}

console.log(diasSemana2[dia] || 'Dia invalido'); // como el dia es 3 va a imprimir miercoles







