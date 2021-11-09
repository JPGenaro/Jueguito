class Pais{
    constructor(nombre){
        this.pais_nombre = nombre;
    }
}

var apodo;
let pais_1 = new Pais("Argentina");

// Cargar datos del usuario
function jugar(){
    console.log(pais_1.pais_nombre);
}