
const jokeurl = 'https://api.chucknorris.io/jokes/random';

/**
 * 
 * @returns una promesa
 */
const obtenerChiste = async()=>{

    try{

        /**
         * El fetch es una libreria incorporada de java proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, tales como peticiones y respuestas
         */
        const respuesta = await fetch(jokeurl);
            if(!respuesta.ok) throw 'No se encontro el chiste' //para el manejo de errores

        /**
         * para retornar los valores que deseo obtener de la peticion necesito hacer la desestructuración, 
         * para eso se utilizan las llaves { }, donde se especifica el nombre de los campos
         */ 
        const {icon_url, id, value } = await respuesta.json();

        return {icon_url, id, value };

    } catch(err){
        throw err;
    }
};


export{
    obtenerChiste
    
}
