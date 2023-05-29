import{obtenerChiste} from './http-provider'

const body = document.body;
let btnChistes, olList; // va a definirse como let para poder modificarse cuando se cree el html
let i =1; // colocar un numerador a la lista de chistes

const crearChisteHtml = ()=>{

    const html = `    
        <h1 class="mt-5">Chistes</h1>
        <hr>

        <button class="btn btn-primary">Otro chiste</button>
        <ol class="mt-2 list-group"> </ol>
    `;

    const divChistes = document.createElement('div'); // crea el elemento
    divChistes.innerHTML = html; // modifica el contenido del elemento

    body.append(divChistes); // agrego el elemento al html
};

const eventos = ()=>{
    btnChistes = document.querySelector('button');
    olList = document.querySelector('ol') 

    btnChistes.addEventListener('click', async()=>{
        
        btnChistes.disabled = true;

        dibujarChiste(await obtenerChiste(), i );
        i+= 1;
        btnChistes.disabled = false;
                
    });
};

// del endPoint Chistes voy a tomar los valores{id, value} del archivo Json
const dibujarChiste = (chiste, i)=>{

    const olItem = document.createElement('li');
    olItem.innerHTML = `${i} <b>${chiste.id} </b>: ${chiste.value}`;
    olItem.classList.add("list-group-item");
    olList.append(olItem); // agregando un chiste a la lista
    
};



export const init = ()=>{
    crearChisteHtml();
    eventos();

}