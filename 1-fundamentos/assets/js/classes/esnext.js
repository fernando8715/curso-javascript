/**
 * Es posible cambiar el valor de una propiedad de manera accidental, para esto se esta implementando las propiedades privadas aunque aun no es compatible contodos los navegadore, Una propiedad privada no puede ser modificada fuera de la clase y para hacerla privada se coloca # antes del nombre de la propiedad 
 */


class Rectangulo{

    #area = 0;

    constructor(base = 0, altura = 0){
        this.base=base;
        this.altura=altura

        this.#area = base * altura;
    }

}


const rectangulo = new Rectangulo(10, 15);

console.log(rectangulo);

// this.#area = 100; // no me va a permitir modificarlo fuera de la clase por ser privado












