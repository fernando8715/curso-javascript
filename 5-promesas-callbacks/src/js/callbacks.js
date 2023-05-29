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

export const buscarHeroes = (id, callback)=>{

    const heroe = heroes[id];

    if( heroe ){
        callback(null, heroe ); // null en el caso de que no exista el error y heroe en caso que lo encuentre
    } else {
        //un error
        callback(`No existe un heroe con el id ${id}`);
    }

    // callback(heroe);
}


