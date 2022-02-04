let numCartas = 0;
let index = 0;
const gifs = ["bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "unicornparrot.gif"]
const gifsShuffle = []
function cardSelection(){
    numCartas = parseInt(prompt("Quantas cartas você deseja? (números de 4 a 14)"));
    while (numCartas > 14 || numCartas < 4 || numCartas%2 != 0){
        numCartas = parseInt(prompt("Quantas cartas você deseja? (números de 4 a 14)"));
    }
    gifs.sort(comparador);
    for(let z = 0; z < numCartas/2; z++){
        gifsShuffle.push(gifs[z]);
        gifsShuffle.push(gifs[z]);
    }
    gifsShuffle.sort(comparador);
    for(let i = 0; i < numCartas; i++){
        let element = document.querySelector(".cards");
        element.innerHTML += `
        <div class="card ${i}" onclick="turn(this)">
            <div class="front-face face">
                Frente
            </div>
            <div class="back-face face">
                <img src="${gifsShuffle[i]}"/>
            </div>
        </div>`
    }
}

function comparador() { 
	return Math.random() - 0.5; 
}

function turn(chosen){
    let element = chosen.querySelector(".back-face");
    element.classList.add("turn-back");
    elementFront = chosen.querySelector(".face");
    elementFront.classList.add("turn-front");
}

cardSelection();