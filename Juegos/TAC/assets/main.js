// CREACION DE PAISES ===========================================================
class Pais {
    constructor (nombre) {
      this.nombre = nombre;
    }

    get Datos() {
      return this.nombre;
    }
}
// const pais_1 = new Pais("Argentina");

function creacion(){
    var name = document.getElementById("apodo").value;
    if (name != "") {
        var eleccion = document.getElementById("comboBox");
        var selected = eleccion.options[eleccion.selectedIndex].text;
        window.alert(selected);
    }else {
        window.alert("Complete los campos restantes!");
    }
}
