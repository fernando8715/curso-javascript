import{ promesaLenta, promesaRapida, promesaMedia } from './js/promesas'
import{ buscarHeroes, buscarHeroesAsync } from './js/promesas'
import { buscarPersona } from './js/recordar';

import './styles.css';

// promesaLenta.then(console.log);
// promesaMedia.then(console.log);
// promesaRapida.then(console.log);


// El Promise.race ejecuta la promesa que se tarda menos ignorando las otras, aunque estas se ejecuten
//  correctamente o tengan errores.

// Promise.race([promesaLenta, promesaMedia, promesaRapida])
// .then(console.log)
// .catch(console.warn)

buscarHeroes('capi')
    .then(console.log)
    .catch(console.warn);

buscarHeroesAsync('iron')
    .then(heroe =>{console.log(heroe)})
    .catch(console.warn)

buscarPersona('persona1')
    .then(console.log)
    .catch(console.warn)