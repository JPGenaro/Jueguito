// CREACION DE PAISES ===========================================================
class Pais {
    constructor (nombre) {
      this.nombre = nombre;
    }

    get Datos() {
      return this.nombre;
    }
}

const pais_1 = new Pais("Argentina");
const pais_2 = new Pais("Brasil");
const pais_3 = new Pais("Bolivia");
const pais_4 = new Pais("Chile");
const pais_5 = new Pais("Uruguay");

function creacion(){
    var name = document.getElementById("apodo").value;
    if (name != "") {
        var eleccion = document.getElementById("comboBox");
        var selected = eleccion.options[eleccion.selectedIndex].text;
        console.log(selected);

        document.getElementById("pais_elegido").innerText = "Pais" + selected;
    }else{
        name = "vacio";
        console.log(name);
    }
}
