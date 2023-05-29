/**
 * Un singleton es una instancia unica de la clase de manera global en toda la aplicación, esto va a ayudar a ahorrar espacio en memoria porque la instancia va a hacer referencia al mismo espcio en memoria, al mismo objeto
 * 
 * Si quiero que alguna informacion sea global y que inicialice nuevas instancias, siempre me va a regresar la misma instancia las veces que se llame
 * 
 * Es buena practica colocar una propiedade estatica llamada instancia, aunque se puede omitir
 * 
 */

class Singleton{

    static estancia; // su valor es undefined
    nombre = ''; // propiedad global
    
    /**  si no tengo una instancia con un nombre, entonces le va a asignar el valor que se envie como parametro, pero si no va a devolver el valor que ya se creo.
     * 
     * dentro del constructor debo hacer un if y preguntar si esta vacia la instancia, sino 
     * 
    */
    
    constructor(nombre = ''){

        //!! me va a dar false porque el valor por defecto de instancia es undefined, con un ! es true y con !! es false
        
        if(!!Singleton.instancia){  // si existe una instancia o el valor no es undefined debe  hacer un return
            return Singleton.instancia;
        }

        // si no existe ninguna instancia va a inicializarla con el valor que se ingrese al llamarla por primera vez
        
        Singleton.instancia= this; // el this hace referencia a esta instancia de la clase
        this.nombre = nombre; 
    }
    
}

const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman'); // aunque el nombre de la propiedad sea Spiderman va a imprimir Ironman
const instancia3 = new Singleton('Capitan America');

console.log(`El nombre en la instancia1 es: ${instancia1.nombre}`);
console.log(`El nombre en la instancia2 es: ${instancia2.nombre}`);
console.log(`El nombre en la instancia3 es: ${instancia3.nombre}`);













