
const carros = ['Ford','Mazda','Toyota','Ferrari'];

let i = 0;

// se va a ejecutar el codigo cuando la condicion en los parentesis sea verdadera
while(i<carros.length){    
    console.log(carros[i]);
    i++;
};

// son consideradas condiciones falsas el undefined, null y false


//===============Ciclo do while=======================================

// la diferencia con el ciclo while es que este ciclo va a ejecutar el codigo por lo menos una vez y se repetira siempre y cunado la condicion en el while sea correcta
console.warn('Ciclo do While')

let j = 0;

do{
    console.log(carros[j]);
    j++;
}while(carros[j]);  // siempre que el arreglo tenga un valor evaluara un true












