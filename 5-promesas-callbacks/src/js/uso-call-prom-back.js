import { buscarHeroes as buscarHeroeCallBack } from './js/callbacks'; // con el as asignamos un alias
import { buscarHeroes } from './js/promesas';

import './styles.css';


const heroeId1= 'iron';
const heroeId2= 'capi';

// buscarHeroes(heroeId, (err, heroe)=>{
    
//     if( err ){
//         console.error(err);
//     } else {
//         console.log(heroe);
//     }
// })

// buscarHeroes(heroeId1).then(heroe1 => {
    
//     buscarHeroes(heroeId2).then(heroe2 =>{
//         console.log(`enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`)
//     })
// });

// Las promesas son acciones que se van a ejecutar
// cuando se tienen varias promesas, para evitar anidarlas se hace uso de la clase promise
// El Promise.all se ejecutara siempre y cuando se resuelvan todas las promesas

Promise.all([buscarHeroes(heroeId1), buscarHeroes(heroeId2)])   // el Promise.all recibe un arreglos de promesas
    .then( ([heroe1, heroe2]) =>{   //el then es la resolucion de las promesas

        console.log(`enviando a ${heroe1.nombre} y ${heroe2.nombre}`);
    }).catch(err => {
        alert(err);
    }).finally( ()=>{
        console.log(`se termino el promise.all`)
    })


 console.log('Fin de programa');






