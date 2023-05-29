import{buscarHeroes, buscarHeroesAsync} from './promesas'


const heroesId = ['capi','iron','spider'];

/**
 * El away se utiliza para esperar que la promesa se resuelva antes de ejecutrase la siguiente instrucción.
 * El away debe colocarse en una funcion asincrona utilizando async antes de los parentesis de la arary function
 *  
 * Para hacer más eficiente el programa se utiliza el map que va a barrer todos los elementos del arreglo y va a devolver los valores transformados
 * Cuando en una función que se utilice el async y el await puede que se generen errores al esperar algo, es conveniente utilizar 
 * el try y el catch y hacer un return en el caso de que falle para devolver un valor por defecto.
 */

export const obtenerHeroeAwait = async(id) => {

    try{
        const heroe = await buscarHeroesAsync(id);
        return heroe; 

    }catch(err){
        console.log('CATH !!!');
        return {
            nombre: 'Sin nombre',
            poder: 'Sin poder'
        };

    }
    
}


// export const obtenerHeroesArr = async() => {

//     const heroesArr = [];

//     for( const id of heroesId){
// // /**
// //  * la Funcion buscarHeroesAsync recibe como parametro el id, cuando se cumple la promesa me devuelve el objeto y este se agrega al arreglo.
// //  * El away debe utilizarse con cuidado porque hasta que no se resuelva la promesa no se ejecutara la siguiente instrucción. El problema de usar el away dentro de un ciclo for es que en cada iteracion va a esperar un tiempo hasta que se cumpla la promesa
// //  */
// //         const heroe = await buscarHeroesAsync(id)  
// //         heroesArr.push(heroe);

// /**
//  * Para hacer más eficiente el codigo, se utilizara la funcion buscarHeroes que me retorna un arreglo de promesas en el return se utilizara el Promise.all para ejecutar todas las promesas simultaneamente. el Promise.all recibe como parametro un arreglo de promesas
//  */           
//         heroesArr.push(buscarHeroes(id));
//     }

//     // el heroesArr es el arreglo de promesas
//     return await Promise.all(heroesArr)
// }



