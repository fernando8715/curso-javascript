/**
 * El patron modulo se realiza colocando una funcion anonima autoinvocada
 * (funcion(){})();  o en funcion de flecha (()=>{})();
 * Este patron ayuda para que el codigo no sea manipulado, brindando seguridad
 */

const miModulo = (()=>{

    'use strict'

        /**
     * 2C = TWO OF CLUBS (TREBOLES)
     * 2D = TWO OF DIAMONDS
     * 2H = TWO OF HEARTS
     * 2S = TWO OF SPADES
     */

    // esta variable va a tener un arreglo
    let deck         = [ ];
    const tipos      = ['C','D','H','S'],
          especiales = ['A','J','Q','K'];

    let puntosJugadores = [];
    
    
    // referencias del HTML
    const btnPedir      = document.querySelector('#btnPedir'),
          btndetener    = document.querySelector('#btnDetener'),
          btnNuevoJuego =  document.querySelector('#btnNuevo');
    
    const divCartasJugadores  = document.querySelectorAll('.divCartas'),
          puntosHTML = document.querySelectorAll('small');

          

    // esta funcion inicializa el juego
    const inicializarJuego = (numJugadores = 2)=>{ // coloca por defecto el numero q coloquemos
        deck = crearDeck();
        
        puntosJugadores = [];        
        for(let i = 0; i < numJugadores; i++){
            puntosJugadores.push(0);
        }
        
        puntosHTML.forEach(elem => elem.innerHTML = '0');
        divCartasJugadores.forEach(elem => elem.innerHTML = '');
       
        btnPedir.disabled   = false;
        btndetener.disabled = true;
        
    };

    
    
    // con la funcion crearDeck va a crear una nueva baraja con las cartas, siempre de manera aleatoria
    const crearDeck=()=>{

        deck = [];

        // las cartas en el formato png inician desde el 2 al 10 con este ciclo podre ir insertando los nombres de los archivos dentro del arreglo
        for(let i = 2; i<=10; i++){ 
            for(let tipo of tipos){
                deck.push(i + tipo);
            }
        }

        // con este ciclo voy a ingresar al arreglo los nombres de las cartas especiales A, J, Q, K
        for(let tipo of tipos){
            for (let esp of especiales){
                deck.push(esp + tipo);
            }
        }

        // Las cartas en el deck estan ordenadas, para poder revolver este deck puedo utilizar una libreria de terceros (underscore.js), son librerias que no tiene javascript. la funcion shuffle recibe un arreglo y lo regresa los elementos de manera aleatoria.

        return _.shuffle(deck);
        
    }



    
    const pedirCarta = ()=>{
        
        if(deck.length === 0){
            throw 'No hay cartas en la baraja';
        }
         // elimina el ultimo elemento del arreglo y me retorna ese elemento
        // console.log(deck);
        // console.log(carta);
        return deck.pop();
    }

    


    const valorCarta = (carta)=>{
        // este metodo devuelve el estring omitiendo el ultimo elemento.
        const valor = carta.substring(0, carta.length-1); 
        
        return (isNaN(valor)) ? 
                (valor === 'A') ? 11: 10 
                : valor*1;

    }



    // El turno sera el 0 para el jugador y el ultimo para la computadora
    const acumularPuntos = (carta, turno)=>{

        puntosJugadores[turno] +=valorCarta(carta);
        puntosHTML[turno].innerHTML = puntosJugadores[turno];
        return puntosJugadores[turno];
    };


    

    const crearCarta = (carta, turno)=>{

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/cartas/${carta}.png`; 
        imgCarta.classList.add('carta'); 
        divCartasJugadores[turno].append(imgCarta);
    }




// ajustar un tiempo para mostrar el mensaje dependiendo de la partida
    const determinarGanador = ()=>{
        
        // desestructuracion del arreglo para asignar los valores a variables
        const [puntosJugador, puntosComputadora] = puntosJugadores;
        
        setTimeout(()=>{
    
            if(puntosJugador === puntosComputadora){
                alert('Empate - Nadie gana!!!');
            } else if (puntosJugador > 21){
                alert('computadora gana!!!');
            } else if (puntosComputadora >21){
                alert('Jugador Gana!!!')
            } else {
                alert('Computadora Gana');
            }
            
        },400);
        
    }



// =============turno Computadora ================
    const turnoComputadora = (puntosJugador)=>{
        
        let puntosComputadora = 0;

        do {
            const carta = pedirCarta(); 
            puntosComputadora = acumularPuntos(carta, puntosJugadores.length-1);
            crearCarta(carta, puntosJugadores.length-1);
             
        } while((puntosJugadores[0] > puntosComputadora) && (puntosJugadores[0] <= 21));

        
        determinarGanador();

    }


    // ============ Eventos =========================

    //recordar que cuando se va a utilizar una instruccion varias veces es aconsejable asignarlo a una variable.

    //Cuando necesito escuchar cuando alguien esta haciendo una solicitud y poder dar respuesta, se utiliza la siguiente sintaxis add.EventListener('evento a escuchar', una funcion ), esta funcion que se coloca aca como un argumento a otra funcion es conocida como "Callback"

    btnPedir.addEventListener('click', ()=>{
        
        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(carta, 0);

        crearCarta(carta, 0);
        
        
        
        // instruccion para no entregar mas cartas cuando tenga mas de 21 puntos
        if(puntosJugador > 21){
            btnPedir.disabled = true;
            btndetener.disabled = true;
            turnoComputadora(puntosJugador);
        } else if(puntosJugador === 21){
            btnPedir.disabled = true;
            btndetener.disabled = true;
            turnoComputadora(puntosJugador);
        } else if (( puntosJugador > 0 ) && ( puntosJugador < 21 )){
            btndetener.disabled = false;
        };
    });

    btndetener.addEventListener('click', ()=>{
        btnPedir.disabled = true;
        btndetener.disabled = true;
        turnoComputadora(puntosJugadores[0]);
    });


    btnNuevoJuego.addEventListener('click', ()=>{
        
        inicializarJuego();
              
    });

    return {

        nuevoJuego: inicializarJuego    // el return es lo unico publico dentro del modulo
    } 
    

})();









