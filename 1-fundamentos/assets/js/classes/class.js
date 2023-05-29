/**
 * La creacion de clases se parece al lenguaje java
 * Los nombres de clase inician con letra mayuscula Uppercase
 * El constructor es un metodo que se va a ejecutar al momento que se crea una nueva instancia de la clase
 * El constructor es el unico metodo que retorna una instancia de un objeto y no un undefined 
 * En el constructor se utiliza el this para hacer referencia a las propiedades de la clase
 * Las caracteristicas de las clases se llaman propiedades y se coloca ; al final de la linea
 * Todas las clases en javascript tiene por defecto el use strict, y no es necesario colocarlo
 * En el constructor se coloca los atributos para las propiedades cuando se creen
 * Los atributos se pueden inicializar con un valor por defecto.
 * Se acostumbra a colocar los metodos debajo del constructor, los metodos pueden regresar o no valores.
 * Para utilizar los metodos definidos en la clase se utiliza la notación de punto y terminan en () para que sea llamado.
 * Para la interpolacion de texto se utiliza este simbolo `` y el codigo entre llaves ${ }
 * Podemos llamar los metodos dentro de otros metodos de la misma clase utilizando el this para hacer referencia al metodo.
 * Las propiedades en la clase son opcionales, pero solo las que se pongan en el constructor son las que van a asignarseles valores al momento de instanciarse
 * El orden de acuerdo a las buenas practicas son propiedades y metodos estaticos, luego las propiedades de la clase, constructor sets y gets y los metodos.
 * Los SET se utilizan para establecer el valor de una propiedad, entre los parentesis se debe colocar el argumento que recibe, no es conveniente colocar mas de una propiedad. El set no puede tener el mismo nombre de la propiedad porque eso va a crear un ciclo infinito. para llamar el metodo set se utiliza la notacion de punto pero no termina en parentesis, se coloca el = y el valor a asignar.
 * El GET es usado para recuperar un valor, se puede retornar lo que quieran
 *  
 * Una forma de saber cuantas instancias tengo de la clase es colocando una propiedad de conteo que se incremente cada vez que se crea una instancia de la clase, para esto se colocaria esa propiedad en el constructor, que es la parte del codigo que se ejecuta al crear una nueva instancia, y para hacer referencia a la propiedad se utiliza la notacion de punto referenciando la clase y la propiedad.
 * 
 * Las propiedades y metodos "estaticos" permiten ser utilizados sin necesidad de instanciar la clase
 * Se acostumbra a colocar las propiedades y metodos estaticos despues de la definicion de la clase.
 * 
 */

class Persona{

    static _conteo = 0;
    static get conteo(){
        return Persona._conteo + ' instancias'
    }

    static mensaje(){ 
        console.log('Hola, soy un metodo estatico')
    }

    nombre = '';
    codigo = '';
    frase = '';
    comida;
    
    constructor(nombre='sin nombre', codigo='sin codigo', frase='sin frase'){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }

    // el metodo toUpperCase() va a configurar el texto en mayuscula
    set setComidaFavorita(comida){
        this.comida = comida.toUpperCase(); 
    }

    get getPersonaFavorita(){
        return `la comida favorita de ${this.nombre} es ${this.comida}`
    }
    

    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${ this.codigo}`);
    }

    miFrase(){
        this.quienSoy();    
        console.log(`${this.codigo} dice: ${this.frase}` )
    }

}

const spiderman = new Persona('Peter Parker', 'Spider', 'Soy tu amigo');
const ironman = new Persona('Tony Stark', 'Ironman', 'Soy Ironman');
console.log(ironman);

// spiderman.quienSoy();
spiderman.miFrase();
spiderman.setComidaFavorita = 'El pie de cereza de la tia May'
console.log(spiderman);
console.log(spiderman.getPersonaFavorita);
console.log(`Conteo estico:`, Persona._conteo);
console.log(Persona.conteo); // el metodo estatico get no necesita () para llamarlo
Persona.mensaje(); // metodo estatico mensaje