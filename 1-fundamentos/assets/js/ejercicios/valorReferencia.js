let juan = {
    nombre: 'Juan'
};


const cambiarNombre = ({...personaje})=>{
    personaje.nombre = 'Tony';
    return personaje;
}


let pedro = {nombre: 'Peter'};
let tony = cambiarNombre( pedro );

console.log({pedro, tony});

let frutas = ['Manzana', 'Pera', 'Sandia'];
let otrasFrutas = [...frutas];

otrasFrutas.push('Mango');

console.table({frutas, otrasFrutas});