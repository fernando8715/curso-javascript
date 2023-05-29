
class Persona{

    // este metodo estatico me permite crear instancias de diferentes formas
    static porObjeto({ nombre, apellido, pais }){  // desestructuracion
        return new Persona(nombre, apellido, pais);
    }

    constructor(nombre, apellido, pais){
        this.nombre   = nombre;
        this.apellido = apellido;
        this.pais     = pais;
    }

    getInfo(){
        console.log(`Info: ${this.nombre }, ${this.apellido }, ${this.pais}`);
    }

}

const nombre1   = 'Fernando',
      apellido1 = 'Ruiz',
      pais1     = 'Colombia'; 

const persona1 = new Persona(nombre1, apellido1, pais1);

persona1.getInfo();

/**
 * Si quiero manejar un constructor que tenga ciertas propiedades, pero tambien se requiera otro constructor que reciba un objeto, para eso se debe crear un metodo estatico, donde este metodo cree una nueva instancia de la clase utilizando su constructor pero con un argumento diferente. Si se utiliza la desestructuracion de argumentos con el uso de { } y dentro se coloca las propiedades que tiene como argumentos el constructor 
 * 
 * 
 */

const fer = {
    nombre:   'Allie',
    apellido: 'Prada',
    pais:     'Suecia'
}

const persona2 = Persona.porObjeto(fer);
persona2.getInfo();













