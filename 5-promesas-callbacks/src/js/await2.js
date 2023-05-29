import{buscarHeroes, buscarHeroesAsync} from './promesas'

const heroesId = ['capi','iron','spider'];
const heroesPromesas = heroesId.map(buscarHeroes);

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

export const heroesCiclo = async() =>{

    console.time('HeroesCiclo');

    // esta instrucción es más entendible y esta en una sola linea de codigo
    for await ( const heroes of heroesPromesas){
        console.log(heroes);
    }

    // const heroes = await Promise.all(heroesPromesas);
    // heroes.forEach(heroe => console.log(heroe));

    console.timeEnd('HeroesCiclo');

}

/**
 * 
 * Otra manera de utilizar el await
 */
export const heroeIfAwait = async(id)=>{

    if ((await buscarHeroesAsync(id)).nombre === 'Ironman'){
        console.log('Es el mejor de todos');
    }else{
        console.log('Naaaa')
    }

}