let numCartas = 0;
function cardSelection(){
    numCartas = parseInt(prompt("Quantas cartas você deseja? (números de 4 a 14)"));
    while (numCartas > 14 || numCartas < 4 || numCartas%2 != 0){
        numCartas = parseInt(prompt("Quantas cartas você deseja? (números de 4 a 14)"));
    }
    for(let i = 0; i < numCartas; i++){
        let element = document.querySelector(".cards");
        element.innerHTML += `
        <div class="card" onclick="turn(this)">
            <div class="front-face face">
                Frente
            </div>
            <div class="back-face face">
                Verso
            </div>
        </div>`
    }
}

function turn(chosen){
    let element = chosen.querySelector(".back-face");
    element.classList.toggle("turn-back");
    elementFront = chosen.querySelector(".face");
    elementFront.classList.toggle("turn-front");
}
cardSelection();