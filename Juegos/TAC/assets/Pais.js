class Pais{
    constructor(nombre){
        this.pais_nombre = nombre;
    }
    getDatos(){
        return "Nombre: ${this.nombre}";
    }
}

module.exports.Pais = Pais;