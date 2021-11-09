// DINO GAME //
// Version 1.1 //




///// VARIABLES /////
const player = document.getElementById('player');
const cactus = document.getElementById('cactus');
const fondo = document.getElementById('f1');
const fondo2 = document.getElementById('f2');
let scoreInterval;
const restart = document.getElementById('buttonRestart');
const board = document.getElementById('board');
var dinosaurio = 0;
const buttonPlayStop = document.getElementById("buttonPlayStop");
var score = 0
var record = 0;
var dino = document.getElementById('dino');
var muerto = false;
var gameOver = document.querySelector(".game-over");

ElegirDinosaurio();
Pause();


///// EVENTOS /////
// teclas //
board.addEventListener("click",function(){
    Moverse();
});
document.addEventListener("keydown", function(e) {
    if (e.keyCode == 32) {
        Moverse();
    }
});
document.addEventListener("keydown", (event) => {
    if (event.key == "ArrowUp" || event.key.toLowerCase() == "w") {
        Moverse();
    }
});
function Moverse(){
    if(muerto == false){
        player.classList.add("playerJump");
        if(buttonPlayStop.classList.contains("play")){
            
        }
        else{
            Reanudar();
            buttonPlayStop.classList.add("play");
        }
    }
    else{
        RestartGame();
    }
    
}

// Animacion Salto //
player.addEventListener("animationend",() =>{
    player.classList.remove("playerJump");
})
// Reiniciar Juego //
restart.addEventListener("click",() => {
    RestartGame();
})


///// INTERVALOS DE JUEGO /////
setInterval(() => {
    checkCondition();

},20);




///// FUNCIONES DE JUEGO /////

// Funcion para ver si esta vivo o muerto //
function checkCondition() {
    if (
        cactus.offsetLeft < (player.offsetLeft + 60)
        && cactus.offsetLeft > player.offsetLeft
        && (player.offsetTop >= (cactus.offsetTop - player.offsetHeight))
    ) {
        Pause();
        muerto = true;
        gameOver.classList.add("gameOver");
        gameOver.style.display = "block";
    }
}

// Funcion para elegir dinosaurio //
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function ElegirDinosaurio(){
    dinosaurio = random(1,2);
    switch(dinosaurio){
        case 1:
            dino.src = "./src/dinosaurio1.png";
            break;
        case 2:
            dino.src = "./src/dinosaurio2.png";
            break;
        
        
    }
}


// Funcion para reanudar el score //
function ReanudarScore(){
    scoreInterval = setInterval(() => {
        score++;
        document.getElementById('score').innerHTML = score;
    },20);
}

// Pausar/Reanudar Juego //
function Pause() {
    cactus.style.animationPlayState = "paused";
    player.style.animationPlayState = "paused";
    fondo.style.animationPlayState = "paused";
    fondo2.style.animationPlayState = "paused";
    clearInterval(scoreInterval);
    // pausar el intervalo de score

}
function Reanudar() {
    cactus.style.animationPlayState = "running";
    player.style.animationPlayState = "running";
    fondo.style.animationPlayState = "running";
    fondo2.style.animationPlayState = "running";
    ReanudarScore();
    
}

// Reiniciar Juego //
function RestartGame(){
    ElegirDinosaurio();
    Pause();
    
    muerto = false;
    gameOver.style.display = "none";
    
    cactus.classList.remove("cactusMove");
    player.classList.remove("playerJump");
    if(buttonPlayStop.classList.contains("play")){
        buttonPlayStop.classList.remove("play");
    }
    if(record<score){
        record = score;
        document.getElementById('record').innerHTML = record;
    }
    score=0;
    document.getElementById('score').innerHTML = score;
    void cactus.offsetWidth;
    cactus.classList.add("cactusMove");
    
}



// BOTON
buttonPlayStop.addEventListener('click', () => {
    buttonPlayStop.classList.toggle("play");
    if(buttonPlayStop.classList.contains("play")){
        if(muerto != true){
            Reanudar();
        }
        
    }
    else{
       Pause(); 
    }
    

})