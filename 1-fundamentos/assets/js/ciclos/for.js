
const heroes = ['Batman','Super man','Mujer maravilla','Acua man'];

// =========== Ciclo for tradicional ===================

console.warn('Ciclo for tradicional');

for(let i = 0; i<heroes.length; i++){
    console.log(heroes[i]);
};


// ========== Ciclo for in ====================
// este ciclo no requiere de inicializar el iterable y se agrega la palabra reservada in seguida del objeto o arreglo, una vez no hayan mas elementos se va a terminar el ciclo

console.warn('Ciclo for in');

for( let i in heroes){
    console.log(heroes[i]);
}


// ========== Ciclo for of ====================
// este ciclo se utiliza para tener referencia de objetos o arreglos de una manera más sencilla

console.warn('Ciclo for of');

// en vez de declarar un iterable se acostumbra a colocar el nombre del objeto o arreglo en singular
// lo que hace este ciclo es extraer el valor del arreglo y lo regresa a la variable


for( let heroe of heroes){ 
    console.log(heroe); // en este ciclo no es necesario hacer referencia al arreglo o el objeto

}








