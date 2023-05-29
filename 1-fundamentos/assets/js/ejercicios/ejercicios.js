// function sumar(num1, num2){

//     let resultado = num1 + num2;
//     console.log(`operacion de sumar ${num1} + ${num2} es:`);
//     return resultado;
// }

// let suma = sumar(10, 3);

// console.log(suma);

// console.log(sumar(25,7));

// const resta = (num1, num2)=>{
//     res = num1 - num2;
//     console.log(`La resta de ${num1} - ${num2} es:`);
//     return res;
// }

// console.log(resta(5, 3));

// const saludar = nombre=> console.log(`!hola! ${nombre}` );

// saludar("Pedro");

// let gratis = false;



// const ingreso = (time)=>{
    
//     let edad = parseInt(prompt("ingrese su edad"));

//     if (edad >= 18){
//         if(time > 2 && time < 7 && gratis == false){
//             console.log(`Puedes Ingresar y su entrada es gratis, son las ${time}:00`);
//             gratis = true;
//         }else{
//             console.log(`Puedes ingresar pero debes pagar la entrada, son las ${time}:00`)
//         };
//     }else{
//         console.log("No puede ingresar por ser menor de edad")
//     }
// }

// ingreso(23);
// ingreso(3);

// let estudiantes = [];

// //registro de estudiante
// for(let i = 0; i<3; i++){
//     estudiantes[i] = [prompt("Nombre del alumno " + (i+1)), 0];
//     console.log(estudiantes[i]);
// };

// const contAsistencia = (nombre, posicion)=>{
//     let presente = prompt(nombre);
//     if(presente == "p" || presente == "P"){
//         estudiantes[posicion][1]++;
//     }
// }

// // Tomar asistencia
// //estudiantes[i][0] muestra el nombre del estudiante por cada posicion i
// for(i=0; i<4; i++){     // dias de clase
//     for(estudiante in estudiantes){   // la variable estudiante devuelve la posicion 
//         contAsistencia(estudiantes[estudiante][0], [estudiante]);
//     }
// }

// for(estudiante in estudiantes ){
//     let resultado = `${estudiantes[estudiante][0]}: <br>
//     Asistio ${estudiantes[estudiante][1]} <br>
//     No asistio ${4 - estudiantes[estudiante][1]} <br>`;
//     document.write(resultado);
//     if(estudiantes[estudiante][1]>=2){
//         document.write(`aprobo <br><br>`);
//     }else{
//         document.write(`Reprobo <br><br>`);
        
//     }
    
// }

// const sumar = (num1, num2)=> {
//     return parseInt(num1) + parseInt(num2);
// }

// const restar = (num1, num2)=> {
//     return parseInt(num1) - parseInt(num2);
// }

// const multiplicar = (num1, num2)=> {
//     return parseInt(num1) * parseInt(num2);
// }

// const dividir = (num1, num2)=> {
//     return parseInt(num1) / parseInt(num2);
// }

// let operacion = parseInt(prompt(`ingrese la operación a realizar
// 1. sumar
// 2. restar
// 3. multiplicar
// 4. dividir`));


//     let num1 = parseInt(prompt("Ingrese el primer número"));
//     let num2 = parseInt(prompt("Ingrese el segundo número"));

//     let resultado;

//     switch(operacion){
//         case 1: 
//             resultado = sumar(num1, num2);
//             document.write(`El resultado de la suma es: ${resultado}`);
//             break;
//         case 2: 
//             resultado = restar(num1, num2)
//             document.write(`El resultado de la resta es: ${resultado}`);
//             break;
//         case 3: 
//             resultado = multiplicar(num1, num2)
//             document.write(`El resultado de la multiplicación es: ${resultado}`);
//             break;
//         case 4: 
//             resultado = dividir(num1, num2)
//             document.write(`El resultado de la división es: ${resultado}`);
//             break;
//         default:
//             document.write("Opcion invalida");
//     } 

// class Carro{
//     constructor(tipo, marca, color){
//         this.tipo = tipo;
//         this.marca = marca;
//         this.color = color
//     }
// }

// class Camioneta extends Carro{
//     constructor(tipo, marca, color, carroceria){
//         super(tipo, marca, color);
//         this.carroceria = carroceria
//     }

//     verInfo(){
//         console.log(`tipo: ${this.tipo}, marca: ${this.marca}, color: ${this.color}, carroceria: ${this.carroceria}`)
//     };

//     static gasolina(){
//         console.log("Vehiculo a gasolina")
//     }

//     static disel(){
//         console.log("vehiculo disel")
//     }

//     get getMarca(){
//         return this.marca;
//     };

//     set setMarca(marca){
//         this.marca = marca;
//     }

// }

// const camioneta1 = new Camioneta("Camioneta", "Toyota", "Blanco", true);
// camioneta1.verInfo();

// Camioneta.gasolina();
// Camioneta.disel();

// console.log(camioneta1.getMarca);
// camioneta1.setMarca = "Subaru";
// console.log(camioneta1.marca);


class Celular{
    constructor(marca, color, peso, resPant, resCam, ram){
        this.marca = marca;
        this.color = color;
        this.peso = peso;
        this.resPant = resPant;
        this.resCam = resCam;
        this.ram = ram
        this.encendido = false;
    };
    
    verInfo(){
        return `Caracteristicas del celular <br>
        Marca: ${this.marca}<br>
        Color: ${this.color}<br> 
        peso: ${this.peso} lbs <br> 
        resolucion Pantalla ${this.resPant}<br>
        resolucion camara: ${this.resCam}<br>
        memoria Ram: ${this.ram} GB <br>`;
    }
    
    on_off (){
        if(this.encendido == false){
            console.log(`celular ${this.marca} encendido`);
            this.encendido = true;
        }else{
            console.log("Celular apagado");
            this.encendido = false;
        }
    }

    reiniciar(){
        if(this.encendido == true){
            console.log("reiniciando el dispositivo");
        } else{
            console.log("El dispositivo esta apagado");
        }
    }

    tomarFoto(){
        if(this.encendido == true){
            console.log(`foto tomada en resolucion ${this.resCam}`);
        }else{
            console.log("dispositivo aapagado");
        }
    }

    grabarVideo(){
        if(this.encendido == true){
            console.log(`grabando en resolucion ${this.resCam}`);
        }else{
            console.log("dispositivo aapagado");
        }
    }


};

class CelularAltaGama extends Celular{
    constructor(marca, color, peso, resPant, resCam, ram, numCam){
        super(marca, color, peso, resPant, resCam, ram);
        this.numCam = numCam;
        this.camLenta = false;
        this.reconFace = false;
    }

    actCamLenta(){
        if(this.camLenta == false){
            console.log("función de grabar en camara lenta activada");
            this.camLenta = true;
        }else{
            console.log("función de grabar en camara lenta desactivada");
            this.camLenta = false;
        }
    };

    reconFacial(){
        if(this.reconFace == false){
            console.log("reconocimiento facial activado");
            this.reconFace = true;
        }else{
            console.log("reconocimiento facial desactivado");
            this.reconFace = false;
        }
    }

    verInfoGamaAlta(){
        return this.verInfo() + `Numero de camaras: ${this.numCam} <br><br>`;
    }

};

// const celular1 = new Celular("Alkatel", "rojo", "150", "1150x620", "HDMI", 2);
// document.write(celular1.verInfo());
// // celular1.on_off();
// // celular1.reiniciar();
// // celular1.tomarFoto();
// // celular1.grabarVideo();

// const celular2 = new Celular("Motorola", "Negro", "165", "HDMI", "Full HD", 2);
// document.write(celular2.verInfo());

// const celular3 = new Celular("Xiaomy", "Blanco", "173", "5.9", "HDMI", 3 );
// document.write(celular3.verInfo());


const celularH1 = new CelularAltaGama("Iphone", "Dorado", "159", "4k", "UHDMI", 2, 3);
document.write(celularH1.verInfoGamaAlta());
celularH1.on_off();
celularH1.reiniciar();
celularH1.tomarFoto();
celularH1.grabarVideo();
celularH1.actCamLenta();
celularH1.reconFacial();

const celularH2 = new CelularAltaGama("Samsung", "Gris", "173", "4K", "UHDMI", 2, 4);
document.write(celularH2.verInfoGamaAlta());

class App{
    constructor(nombre, peso){
        this.nombre = nombre;
        this.descargas = 100;
        this.puntuacion = 4.5;
        this.peso = peso
        this.instalada = false;
        this.abierta = false;
    };

    instalar(){
        if(this.instalada == false){
            this.instalada = true;
            this.descargas++;
            console.log(`instalando la aplicación ${this.nombre}`);
        }else{
            console.log(`La aplicación ${this.nombre} ya esta instalada`);
        }
    }

    desinstalar(){
        if(this.instalada == true){
            console.log(`desinstalando la aplicación ${this.nombre}`);
            this.instalada = false;
        } else{
            console.log(`La aplicación ${this.nombre} no esta instalada`)
        }
    }

    abrir(){
        if(this.abierta == false){
            console.log(`la aplicación ${this.nombre} se esta ejecutando`);
            this.abierta = true;
        } else{
            console.log(`La aplicación ${this.nombre} esta abierta`)
        }
    }

    cerrar(){
        if(this.abierta == true){
            console.log(`la aplicación ${this.nombre} se cerro`);
            this.cerrar = false;
        } else{
            console.log(`La aplicación ${this.nombre} no esta abierta`)
        }
    }

    info(){
        document.write(`La aplicación ${this.nombre} tiene ${this.descargas} descargas y su puntuación es ${this.puntuacion} <br>`)
    }

}

// const app1 = new App("Davivienda", "247 Mb");
// app1.instalar();
// app1.abrir();
// app1.cerrar();
// app1.desinstalar();
// app1.info();




