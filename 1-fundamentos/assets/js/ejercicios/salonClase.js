const infoAsignatura = (materia)=>{

    materias = {
        programacion: ["Sandra", "Miguel", "Claudia", "Allie", "Fernando" ],
        seguridad: ["Roberto", "Claudia", "Allie", "Fernando" ],
        datos: ["Jaime", "Miguel", "Claudia", "Fernando" ],
        desarrollo: ["Ricardo", "Miguel", "Claudia", "Allie", ]
    }
    
    if(materias[materia] !== undefined){
        return [materias[materia], materia];
    }else{
        return materias;
    }
}

const mostrarInfo = (materia)=>{
    let informacion = infoAsignatura(materia);

    if( informacion !== false){
        let profesor = informacion[0][0];
        let alumnos = informacion[0];
        alumnos.shift(); // elimino el primer elemento del arreglo
        alumnos.sort();
        console.log(`El profesor(a) de ${informacion[1]} es: ${profesor}
        Los alumnos son: ${alumnos}`); 
    }else{
        console.log("La materia no se encuentra registrada")
    }
}

const cantAlumnos = (alumno)=>{
    let cantidad = 0;
    let informacion = infoAsignatura();
    
    for(info in informacion){
        console.log(`informacion de la asignatura: ${informacion[info]}`);
        if(informacion[info].includes(alumno)){
            cantidad++;
        }
              
    }
    console.log(`${alumno} esta en ${cantidad} clases`);
}


mostrarInfo("programacion");
mostrarInfo("seguridad");
mostrarInfo("datos");
mostrarInfo("desarrollo");

cantAlumnos("Allie");





