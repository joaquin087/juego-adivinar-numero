// Número random entre 1 y 10
let numeroSecreto = Math.floor(Math.random() * 11);
let cantidadIntentos = 3;
let mensajeGanador = document.getElementById("leyenda");
let numeroUsuario;

// Tomar número en input
document.getElementById("btnArriesgar").onclick = function() {myFunction()};


function myFunction() {
    numeroUsuario = parseInt(document.getElementById('textNumero').value);
}

if (numeroSecreto == numeroUsuario) {
    alert("GANASTE");
}




