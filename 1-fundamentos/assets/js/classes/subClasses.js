/**
 * Cuando se va a trabajar con herencia se requiere el uso de la palabra reservada "extends", esto nos va a ayudar a evitar tener que copiar y pegar codigo 
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

/**  
 * Creando una clase que requiere de propiedades y metodos de otra clase, en lugar de reescribir codigo que se encuentre en la otra clase, lo unico que se hace es extender de esa clase y solo colocar propiedades o metodos nuevos que vaya a tener la nueva clase.
 * Para inicializar los valores de la clase que extiende de otra, se debe colocar un constructor de la nueva clase y llamar el constructor de la clase que extiende usando la palabre super(), super va a hecr referencia a la clase que extiende.
 * Si se va a inicializar una propiedad con el metodo this se debe colocar despues del super()
 * si quiero hacer uso de un metodo de la clase padre sin sobreescribirlo, entonces uso el super.nombreMetodo()
*/

class Heroe extends Persona{
    clan = 'sin clan';

    constructor(nombre, codigo, frase){
        
        super(nombre, codigo, frase);

        this.clan = 'Los avengers';
    }

    quienSoy(){
        console.log(`Soy ${this.nombre}, ${this.clan}`); // sobreescribiendo el metodo
        super.quienSoy(); // llamando al metodo de la clase padre
    }

}


// instanciando la clase Heroe
const spiderman = new Heroe('Peter Parker', 'Spider', 'Soy tu amigo');
console.log(spiderman);
spiderman.quienSoy();



