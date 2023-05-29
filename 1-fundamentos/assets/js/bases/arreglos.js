/*
* para definir los arreglos se usan [ ]
* 
*
*/

let videoJuegos = ['Mario 3', 'Mega Man', 'Crash'];
console.log({videoJuegos}); // imprime el nombre de la variable y el arreglo
console.log(videoJuegos[0]); //imprime la primera posicion

let arregloCosas = [
    true, 
    123,
    'Fernando',
    1 + 2,
    function(){},   //funcion tradicional
    ()=>{},         // funcion de flecha
    {a: 1},         //objeto literal
    ['X', 'Mega Man', 'Zero', 'Dr. Light', 'Wood Man']
];

console.log({arregloCosas});
console.log(arregloCosas[0]);
console.log(arregloCosas[2]);
console.log(arregloCosas[7]);
console.log(arregloCosas[7][3]);

let nombrePersonajes = arregloCosas[7]; //asigno a la variable la referencia del arreglo
console.log(nombrePersonajes[4]); // imprimo el elemento que estan en el indice 3







