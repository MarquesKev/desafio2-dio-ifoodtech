function player(victorys, defeats) {
    return (victorys - defeats)
}

let mmr = player(215, 125)

function rank() {
    if (mmr <= 10){
        console.log ("O herói tem saldo de " + mmr + " vitórias, portanto está no nível Ferro")
    } else if (mmr <= 20){
        console.log ("O herói tem saldo de " + mmr + " vitórias, portanto está no nível Bronze")
    } else if (mmr <= 50){
        console.log ("O herói tem saldo de " + mmr + " vitórias, portanto está no nível Prata")
    } else if (mmr <= 80){
        console.log ("O herói tem saldo de " + mmr + " vitórias, portanto está no nível Ouro")
    } else if (mmr <= 90){
        console.log ("O herói tem saldo de " + mmr + " vitórias, portanto está no nível Diamante")
    } else if (mmr <= 100){
        console.log ("O herói tem saldo de " + mmr + " vitórias, portanto está no nível Lendário")
    } else {
        console.log ("O herói tem saldo de " + mmr + " vitórias, portanto está no nível Imortal")
    }
}

rank()