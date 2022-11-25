//opciones
const cara = document.getElementById("cara")
const sello = document.getElementById("sello")

//resultado
const resultado = document.getElementById("resultado")

//ejegir
cara.addEventListener("click", ()=>{
    iniciar('cara');
})

sello.addEventListener("click", ()=>{
    iniciar('sello');
})

function iniciar(opcion){
    //consola
    const consola = consolaMovimiento();
    //jugador
    const jugador = opcion;
    //comparar
    const com = comparacion(consola,jugador);
    //condiciones
    if(com == 1){
        resultado.innerHTML = "El jugador elige "+jugador+" <br>Consola elige "+consola+"<br><span class'ganador'>Felicitaciones Ha Ganado</span>";
    }

    if(com == 2){
        resultado.innerHTML = "El jugador elige "+jugador+" <br>Consola elige "+consola+"<br><span class'perdedor'>Lo Siento Sigue Intentando</span>";
    }

    if(com == 3){
        resultado.innerHTML = "El jugador elige "+jugador+" <br>Consola elige "+consola+"<br><span class'empate'>Empate</span>";
    }
}


function consolaMovimiento(){
    const opciones = ['cara', 'sello'];
    const random = Math.floor(Math.random()*2);
    const con = opciones[random];
    return (con);
}

function comparacion(con , jug){
    switch(con+jug){
        case 'carasello':
        return 1;
        case 'sellocara':
        return 2;
        case 'caracara':
        case 'sellosello':
        return 3;
    }
}