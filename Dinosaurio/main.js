const player = document.getElementById('player');
const cactus = document.getElementById('cactus');
const fondo = document.getElementById('f1');
const fondo2 = document.getElementById('f2');
let scoreInterval;
const restart = document.getElementById('buttonRestart');
const board = document.getElementById('board');
var dinosaurio = 0;
const buttonPlayStop = document.getElementById("buttonPlayStop");
let score = 0
var dino = document.getElementById('dino');
ElegirDinosaurio();
Pause();


///// EVENTOS /////
// teclas //
board.addEventListener("click",function(){
    player.classList.add("playerJump");
    if(buttonPlayStop.classList.contains("play")){
        pass;
    }
    else{
        Reanudar();
        buttonPlayStop.classList.add("play");
    }
})
document.addEventListener("keydown", function(e) {
    if (e.keyCode == 32) {
        player.classList.add("playerJump");
        if(buttonPlayStop.classList.contains("play")){
            pass;
        }
        else{
            Reanudar();
            buttonPlayStop.classList.add("play");
        }
    }
});
document.addEventListener("keyup", (event) => {
    if (event.key == "ArrowUp" || event.key.toLowerCase() == "w") {
        player.classList.add("playerJump");
        if(buttonPlayStop.classList.contains("play")){
            pass;
        }
        else{
            Reanudar();
            buttonPlayStop.classList.add("play");
        }
    }
});

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
        window.alert("Game Over");
        RestartGame();
    }
}

// Funcion para elegir dinosaurio //
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function ElegirDinosaurio(){
    dinosaurio = random(1,2);
    
    if(dinosaurio == 1){
        dino.src = "./src//dinosaurio1.png";
    }
    else{
        dino.src = "./src/dinosaurio2";
    }
}


// Funcion para reanudar el score //
function ReanudarScore(){
    scoreInterval = setInterval(() => {
        score++;
        document.getElementById('score').innerHTML = score;
    },2000);
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
    score=0;
    document.getElementById('score').innerHTML = score;
    cactus.classList.remove("cactusMove");
    player.classList.remove("playerJump");
    if(buttonPlayStop.classList.contains("play")){
        buttonPlayStop.classList.remove("play");
    }
    void cactus.offsetWidth;
    cactus.classList.add("cactusMove");
    
}



// BOTON
buttonPlayStop.addEventListener('click', () => {
    buttonPlayStop.classList.toggle("play");
    if(buttonPlayStop.classList.contains("play")){
        Reanudar();
    }
    else{
       Pause(); 
    }
    

})