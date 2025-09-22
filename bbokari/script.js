let hunger = 100;
let happiness = 100;
let energy = 100;

let petImage = document.getElementById('petImage');
let hungerBar = document.getElementById('hunger');
let happinessBar = document.getElementById('happiness');
let energyBar = document.getElementById('energy');

const music = document.getElementById("music");
const muteBtn = document.getElementById("muteBtn");

music.volume = 0.2;
muteBtn.innerHTML = "🔈";

setInterval(() => {
    hunger -= 2;
    happiness -= 1;
    energy -= 1;
    updateStats();
}, 5000);

function updateStats() {

    hunger = Math.max(0, hunger);
    happiness = Math.max(0, happiness);
    energy = Math.max(0, energy);

    hungerBar.value = hunger;
    happinessBar.value = happiness;
    energyBar.value = energy;

    if(hunger === 0 || energy === 0 || happiness === 0) {
        petImage.src = "assets/bbokari dead.png";
        alert('Tu Tamagochi ha muerto. Recarga la página para intentarlo de nuevo.');
        clearInterval();
    }else if(hunger < 30 || energy < 30 || happiness < 30) {
        petImage.src = "assets/bbokari.png";
    }else if(hunger < 50 || energy < 50 || happiness < 50) {
        petImage.src = "assets/bbokari ojos cerrados.png";
    }else{
        petImage.src = "assets/bbokari in love.png";
    }
}

//actions
function feed() {
    hunger += 20;
    
    if(hunger > 100) hunger = 100;
    updateStats();
}

function sleep() {
    energy += 20;
    
    if(energy > 100) energy = 100;
    updateStats();
}

function play() {
    happiness += 20;
    
    if(happiness > 100) happiness = 100;
    updateStats();
}

document.addEventListener("click", () => {
    if(music.paused) {
        music.play();
    }
}, {once: true});

muteBtn.addEventListener("click", () => {
    if(music.muted){
        music.muted = false;
        muteBtn.innerHTML = "🔈";
    }else{
        music.muted = true;
        muteBtn.innerHTML = "🔇";
    }
});



