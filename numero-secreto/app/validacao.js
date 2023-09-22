function verificaValorValidoChute (chute) {
    const numero = +chute

    if(gameOver(chute)){
        document.body.innerHTML = `
            <h2>GAME OVER</h2>
            <h3>O jogo foi finalizado</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>

        `
        return
    }

    if(chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>valor Invalido</div>'
        return
    }

    if(numeroPassaValorPermitido(numero)){
        elementoChute.innerHTML += `<div>valor invalido: Fale um numero entre ${menorValor} a ${maiorValor}</div>`
        return 
    }

    if(acertou(numero)){
        document.body.innerHTML = `
        
            <h2>Você acertou!</h2>
            <h3>O numero secreto era ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>

        `
    } else if (numeroMaior(numero)) {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i> </div>`
    } else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i> </div>`
    }


}

function gameOver(chute) {
    return chute.toUpperCase() === 'GAME OVER';
}

function numeroMaior(numero){
    return numero > numeroSecreto
}

function acertou(numero) {
    return numero === numeroSecreto
}

function numeroPassaValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

 document.body.addEventListener('click', e => {
     if(e.target.id == 'jogar-novamente'){
         window.location.reload();
     }
 })


