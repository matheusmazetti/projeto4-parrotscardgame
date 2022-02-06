let numCartas = 0;
const selected = [];
const gifs = ["bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "unicornparrot.gif"]
const gifsShuffle = []
let firstSelected = null;
let secondSelected = null;
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
        <div class="card" onclick="turn(this)">
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
    let elementFront = chosen.querySelector(".face");
    elementFront.classList.add("turn-front");
    selected.push(chosen.querySelector(".back-face img").getAttribute("src"));

    if(firstSelected == null){
        firstSelected = chosen;
    }else{
        secondSelected = chosen;
    }
    
}

function testSelection(){
    if (secondSelected != null){
        cardCompare();
    }
}
function turnBack(){
    let firstElement = firstSelected.querySelector(".back-face");
    firstElement.classList.remove("turn-back");
    let secondElement = firstSelected.querySelector(".face");
    secondElement.classList.remove("turn-front");
    firstElement = secondSelected.querySelector(".back-face");
    firstElement.classList.remove("turn-back");
    secondElement = secondSelected.querySelector(".face");
    secondElement.classList.remove("turn-front");
    firstSelected = null;
    secondSelected = null;
}

function cardCompare(){
    let firstImg = firstSelected.querySelector(".back-face img");
    let secondImg = secondSelected.querySelector(".back-face img");
    if(firstImg.getAttribute("src") != secondImg.getAttribute("src")){
        setTimeout(turnBack, 1000);
    } else {
        firstSelected = null;
        secondSelected = null;
    }
}

function deselect(){
    firstSelected = null;
    secondSelected = null;
}
cardSelection();