
const elMayor = (a, b) => (a > b) ? a : b;

console.log(elMayor(30, 50));

const tieneMembresia = (miembro) => (miembro) ? `El valor es de $3` : `El valor es de $10`;

console.log(tieneMembresia(false));


const amigo = false;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? `Thor` : `Hulk`,
];

console.log(amigosArr);

// formas de implementar una condicion con el codigo ternario simplificando codigo

const nota = 95;
const grado = nota >= 95 ? `E` :
              nota >= 90 ? `S` :
              nota >= 80 ? `B` :
              nota >= 70 ? `A` : `R`;


console.log({nota, grado });

                                   











