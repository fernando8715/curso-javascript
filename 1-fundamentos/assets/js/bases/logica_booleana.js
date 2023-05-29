
const regresaTrue = () =>{
    console.log('Funcion de Regresa true');
    return true;
}

const regresaFalse = () =>{
    console.log('funcion de Regresa falso');
    return false;
}

// para la negación se emplea el simbolo !

console.log( !true ); // va a imprimir false

console.log( !regresaFalse() ); // va a imprimir true por la negación

// operador logico 'and' es &&

console.log(true && true);
console.log(true && false);

// como la primera opciones falsa no va a imprimir la instruccionde regresa true
console.log(regresaFalse() && regresaTrue()); 


// como la primera opciones es verdadera tambien va a imprimir la instruccionde regresa false
console.log(regresaTrue() && regresaFalse()); 

console.log('===== Operador OR =============')
// operador logico 'Or' ||

console.log(true || false); // con una condicion que sea verdadera el resultado sera true
console.log(false || false); 

// como la primera funcion es falsa entonces verifica la segunda funcion 
console.log(regresaFalse()||regresaTrue());

// como la primera funcion es veraddera ya no ejecuta la segunda funcion
console.log(regresaTrue()||regresaFalse());












