let numCartas = 0;
function selecaoCartas(){
    numCartas = parseInt(prompt("Quantas cartas você deseja? (números de 4 a 14)"));
    while (numCartas > 14 || numCartas < 4 || numCartas%2 != 0){
        numCartas = parseInt(prompt("Quantas cartas você deseja? (números de 4 a 14)"));
    }
}

selecaoCartas();