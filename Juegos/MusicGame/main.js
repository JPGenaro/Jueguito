// JuegoMusica //
// Version: 0.0 //


///// VARIABLES /////

const board = document.getElementById("board");

var game = document.querySelector(".game");
var tiempo = 0;
var velocidad = 10;
var y=0;
var x = 0;
var y2 = 0;
var x2 = 0;

const meta = document.createElement("div");
meta.classList.add("meta");
var m2 = document.createElement("div");
m2.classList.add("meta2");
var m3 = document.createElement("div");
m3.classList.add("meta3");
m2.appendChild(m3);
meta.appendChild(m2);

const player = document.createElement("div");
player.classList.add("player");
board.appendChild(player);

var obstaculos = [];
var obstaculosX = [];
var obstaculosY = [];
var obstaculosXX = [];
var obstaculosYY = [];
var direccionX = 0;
var direccionY = 0;

///// EVENTOS /////

meta.addEventListener("mouseover", function(){
    Ganar();
});

board.addEventListener("mousemove", (event) =>{
    var x = event.clientX;
    var y = event.clientY;
    player.style.left = x + "px";
    player.style.top = y + "px";
    document.body.style.cursor = "none";
});

///// INTERVALOS /////

var loop = setInterval(() => {
    MoverIzquierda();
    MoverDerecha();
},20);
setInterval(() => {
    detectarColisiones();
},10);
var seconds = setInterval(() => {
    /*
    var aux = document.createElement('div');
    aux.classList.add("cuadraditos");
    aux.style.top = Math.floor(Math.random() * (100 - 0)) + 0 + "%";
    aux.style.left = Math.floor(Math.random() * (100 - 0)) + 0 + "%";
    board.appendChild(aux);
    obstaculos.push(aux);
    console.log("uno mas");
    */
},1000);

///// FUNCIONES /////

function Ganar(){
    game.style.display = "block";
    game.innerHTML = "Ganaste";
    game.classList.add("BajarLento");
}

function Coliciones(a,b){
    return !(
        (a.offsetTop + a.offsetHeight) < (b.offsetTop) ||
        (a.offsetTop) > (b.offsetTop + b.offsetHeight) ||
        (a.offsetLeft + a.offsetWidth) < b.offsetLeft ||
        (a.offsetLeft) > (b.offsetLeft + b.offsetWidth)
    );
}

function detectarColisiones(){
    for(var i = 0; i < obstaculos.length; i++){
        if(Coliciones(player, obstaculos[i])){
            game.style.display = "block";
            game.innerHTML = "Perdiste";
            game.classList.add("BajarLento");
            clearInterval(loop);
            clearInterval(seconds);
        }
    }
}

function MoverIzquierda(){
    for (var i = 0 ; i < obstaculosX.length; i++) {
        var aux = obstaculosX[i];
        aux.style.left = parseInt(aux.style.left) - velocidad +"px";
        if(parseInt(aux.style.left) <= 0){
            obstaculosX.splice(i,1);
            board.removeChild(aux);
            console.log("borrar");
        }
    }
}

function MoverDerecha(){
    for (var i = 0 ; i < obstaculosXX.length; i++) {
        var aux = obstaculosXX[i];
        aux.style.left = parseInt(aux.style.left) + velocidad +"px";
        if(parseInt(aux.style.left) >= board.offsetWidth){
            obstaculosXX.splice(i,1);
            board.removeChild(aux);
            console.log("BORRAR");
        }
    }
}


//////////////////////////////////// NIVEL 1 ///////////////////////////////////////////////

tiempo = 0;

// generar una funcion que ejecute una cancion
function Musica(){
    var audio = document.createElement("audio");
    audio.preload = "auto";
    audio.src = "canciones/cancion1.mp3";
    audio.load();
    audio.play();
}

Musica();

nivel1 = setInterval(() => {
    y=0;
    y2=100;
    x=0;
    x2=100;
    tiempo++;
    velocidad = 12;
    if(tiempo == 1){
        for(var i = 0; i < 20; i++){
            face1();
        }
    }
    if(tiempo == 3){
        for(var i = 0; i < 20; i++){
            face2();
        }
    }
    if(tiempo == 5){
        y=10;
        y2=90;
        for(var i = 0; i < 20; i++){
            face3();
        }
    }
},500);

function face1(){
    generarDerechaIzquierda();
    y+=4;
}
function face2(){
    generarIzquierdaDerecha();
    y2 -= 4;
}
function face3(){
    y+=5;
    y2-=5;
    generarIzquierdaDerecha();
    generarDerechaIzquierda();
}

function generarDerechaIzquierda(){
    var aux = document.createElement('div');
    aux.classList.add("cuadraditos");
    aux.style.top = y+ "%";
    aux.style.left = board.offsetWidth + "px";
    board.appendChild(aux);
    obstaculosX.push(aux);
    obstaculos.push(aux);
   
}

function generarIzquierdaDerecha(){
    var aux = document.createElement('div');
    aux.classList.add("cuadraditos");
    aux.style.top = y2+ "%";
    aux.style.left = 0 + "px";
    board.appendChild(aux);
    obstaculosXX.push(aux);
    obstaculos.push(aux);
}