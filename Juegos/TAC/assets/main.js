let modulo = require('./Pais');
let computador = new modulo.Pais("Argentina");

// Cargar datos del usuario
function jugar(){
    console.log(computador.getDatos());
}