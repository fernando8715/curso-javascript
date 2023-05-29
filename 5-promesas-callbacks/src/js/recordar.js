

const Persona = {

    persona1: {
        nombre: 'Fernando',
        apellido: 'Ruiz'
    },
    persona2: {
        nombre: 'Allie',
        apellido: 'Prada'
    }
}


export const buscarPersona = (id) => {

    const persona = Persona[id]

    return new Promise((resolve, reject)=>{

        if(persona){
            resolve (persona);
        }else{
            reject('Esa persona no se encuentra registrada')
        }
    });
}

