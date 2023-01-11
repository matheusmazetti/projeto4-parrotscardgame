let numCards = 0;
const selected = [];
const gifs = ["bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "unicornparrot.gif"]
const gifsShuffle = []
let firstSelected = null;
let secondSelected = null;
let plays = 0;
let endCounter = 0;
let clock = 0;
let time = null;
let tempo = null;
function cardSelection(){
 numCards = parseInt(prompt("Quantas cartas você deseja? (números de 4 a 14)"));
    while  (numCards > 14 || numCards < 4 || numCards%2 != 0){
     numCards = parseInt(prompt("Quantas cartas você deseja? (números de 4 a 14)"));
    }
    gifs.sort(comparador);
    for(let z = 0; z < numCards/2; z++){
        gifsShuffle.push(gifs[z]);
        gifsShuffle.push(gifs[z]);
    }
    gifsShuffle.sort(comparador);
    for(let i = 0; i < numCards; i++){
        let element = document.querySelector(".cards");
        element.innerHTML += `
        <div class="card" onclick="turn(this)" data-identifier="card">
            <div class="front-face face" data-identifier="back-face">
                <img src="assets/front.png" />
            </div>
            <div class="back-face face" data-identifier="front-face">
                <img src="assets/${gifsShuffle[i]}"/>
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
    chosen.setAttribute("onclick", "alert('Você já selecionou essa carta')");
    plays++;

    if(firstSelected == null){
        firstSelected = chosen;
        if(clock == 0){
            startTime();    
            console.log("tempo")
        } 
    } else {
        secondSelected = chosen;
    }

        
}

function testSelection(){
    if (secondSelected != null){
        cardCompare();
    }
    
}
function turnBack(){
    firstSelected.setAttribute("onclick", "turn(this)");
    secondSelected.setAttribute("onclick", "turn(this)");
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
    let disableClick = document.querySelector("body");
    disableClick.classList.remove("disable-click");
}

function cardCompare(){
    let disableClick = document.querySelector("body");
    disableClick.classList.add("disable-click");
    let firstImg = firstSelected.querySelector(".back-face img");
    let secondImg = secondSelected.querySelector(".back-face img");
    if(firstImg.getAttribute("src") != secondImg.getAttribute("src")){
        setTimeout(turnBack, 1000);
    } else {
        firstSelected.setAttribute("onclick", "alert('Você já descobriu este par')");
        secondSelected.setAttribute("onclick", "alert('Você já descobriu este par')");
        firstSelected = null;
        secondSelected = null;
        disableClick.classList.remove("disable-click");
        endCounter++;
        setTimeout(endGame, 10);
    }
}

function deselect(){
    firstSelected = null;
    secondSelected = null;
}

function endGame(){
    let restart = null;
    if (endCounter == numCards/2){
        clearInterval(tempo);
        alert(`Você ganhou em ${plays} jogadas e ${clock.innerHTML} segundos!`);
        restart = prompt("Gostaria de jogar novamente [s - sim/n - não]");
        if (restart == "s"){
            location.reload();
            clearInterval(tempo);
        } else if(restart == "n"){
            alert("Obrigado por jogar");
            clearInterval(tempo);
        }
    }
    
}

function timer(){
    clock = document.querySelector(".time");
    clock.innerHTML = parseInt(clock.innerHTML) + 1;
}

function startTime(){
    tempo = setInterval(timer, 1000);
}
cardSelection();