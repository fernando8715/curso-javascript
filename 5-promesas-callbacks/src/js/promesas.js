const heroes = {

    capi: {
        nombre: 'Capitan America',
        poder: 'Usar escudo'
    },
    iron: {
        nombre: 'Ironman',
        poder: 'tecnología'
    },
    spider:{
        nombre: 'Spiderman',
        poder: 'Telaraña'
    },

}

/**
 * dentro de la promesa se coloca un callback, las promesas reciben dos argumentos una cuando se realiza 
 * correctamente (resolve) y la otra es cuando ocurre un error (reject). 
 * Cuando se ejecute esta funcion me va a devolver un arreglo de promesas.
*/ 

export const buscarHeroes = (id) => {

    const heroe = heroes[id];

    return new Promise( (resolve, reject) =>{

        if(heroe){
            
            setTimeout(() => resolve(heroe), 1000);

        }else{
            reject(`No existe un heroe con el id ${id}`);
        }

    });
    
}

// el async me permite hacer promesas más resumidas, no tengo que usar el resolve ni reject
// el return hace como resolve y el throw es el reject
export const buscarHeroesAsync = async (id) => {

    const heroe = heroes[id];

    if(heroe){
        return heroe;
    }else{
        throw `No existe un heroe con el id ${id}`;
    }

    
    
}

    const promesaLenta = new Promise( (resolve, reject) =>{
        setTimeout(() => resolve ('Promesa lenta'), 2000);
    } );

    const promesaMedia = new Promise( (resolve, reject) =>{
        setTimeout(() => resolve ('Promesa media'), 1500);
    } );

    const promesaRapida = new Promise( (resolve, reject) =>{
        setTimeout(() => resolve ('Promesa rapida'), 1000);  // los valores son en milisegundos
    } );


// forma de exportar varias cosas
    export {
        promesaLenta,
        promesaMedia,
        promesaRapida
    }
