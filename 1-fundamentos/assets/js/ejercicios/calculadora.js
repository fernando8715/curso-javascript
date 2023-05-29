class Calculadora{

    sumar(num1, num2) {
        return num1 + num2;
    }
    
    restar(num1, num2){
        return num1 - num2;
    }
    
    multiplicar (num1, num2){
        return num1 * num2;
    }
    
    dividir (num1, num2){
        return num1 / num2;
    }
    
    potencia(base, exp){
        return base**exp; 
    }

    raizCua(num){
        return (Math.sqrt(num));
    }

    raizCub(num){
        return (Math.cbrt(num));
    }
}

let cal1 = new Calculadora();


let operacion = parseInt(prompt(
    `ingrese la operación a realizar
    1. sumar
    2. restar
    3. multiplicar
    4. dividir
    5. potencia
    6. raiz cuadrada
    7. raiz cubica`));

    let num1, num2;

    if(operacion >=1 && operacion <=4){
        num1 = parseInt(prompt("Ingrese el primer número"));
        num2 = parseInt(prompt("Ingrese el segundo número"));
    } else if (operacion == 5){
        num1 = parseInt(prompt("Ingrese la base"));
        num2 = parseInt(prompt("Ingrese el exponente"));
    } else {
        num1 = parseInt(prompt("Ingrese el número"));
    }
    
    let resultado;
    
    switch(operacion){
        case 1: 
            resultado = cal1.sumar(num1, num2);
            document.write(`El resultado de la suma es: ${resultado}`);
            break;
        case 2: 
            resultado = cal1.restar(num1, num2);
            document.write(`El resultado de la resta es: ${resultado}`);
            break;
        case 3: 
            resultado = cal1.multiplicar(num1, num2);
            document.write(`El resultado de la multiplicación es: ${resultado}`);
            break;
        case 4: 
            resultado = cal1.dividir(num1, num2);
            document.write(`El resultado de la división es: ${resultado}`);
            break;
        case 5:
            resultado = cal1.potencia(num1, num2);
            document.write(`El resultado de la potencia es: ${resultado}`);        
            break;
        case 6:
            resultado = cal1.raizCua(num1);
            console.log(`El resultado de la raiz cuadrada es: ${resultado}`);
            break;
        case 7:
            resultado = cal1.raizCub(num1);
            document.write(`El resultado de la raiz cubica es: ${resultado}`);
            break;
        default:
            document.write("Opcion invalida");
    } 
