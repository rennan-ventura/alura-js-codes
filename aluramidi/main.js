function playSong(AudioSelector) {

    const elemento = document.querySelector(AudioSelector);

    if(elemento != null && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido');
    }

}

const keyList = document.querySelectorAll('.tecla');

for(let count = 0; count < keyList.length; count++) {

    const key = keyList[count];
    const instrument =  key.classList[1];
    const idAudio = `#som_${instrument}`;

    key.onclick = function ()  {
        playSong(idAudio);
    }

    key.onkeydown = function (event) {

        console.log(event);

        if(event.code === 'Space' || event.code === 'Enter'){
            key.classList.add('ativa');
        }
    }
    key.onkeyup = function () {
        key.classList.remove('ativa');
    }

}
