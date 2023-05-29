/*
* Operador ternario ? : este operador necesita de ambos valores
*
*/

const dia = 1;
const horaActual = 8;

let horaApertura;
let mensaje;

// if((dia===0)||(dia===6)){
//     console.log(`Fin de Semana`);
//     horaApertura = 9;
// } else{
//     console.log(`Dia de semana`);
//     horaApertura = 11;
// }


// La misma instrucción con el operador ternario seria de la siguiente manera
horaApertura = ([0,6].includes(dia)) ? 9 : 11;
// Si el dia esta incluido entre el 0 o el 6 (?)entonces abre a las 9 sino (:) abre a las 11


// if(horaActual>=horaApertura){
//     mensaje = `Esta abierto`;
// } else {
//     mensaje = `Esta cerrado, hoy abrimos a las ${horaActual}`;
// }


mensaje = (horaActual>=horaApertura) ? `Esta abierto aqui` : `Esta cerrado, hoy abrimos a las ${horaApertura}`;

console.log({horaApertura, mensaje});










