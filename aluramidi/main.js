function playSong(idElementAudio) {

    document.querySelector(idElementAudio).play();

}

const keyList = document.querySelectorAll('.tecla');


for(let count = 0; count < keyList.length; count++) {

    const key = keyList[count];
    const instrument =  key.classList[1];

    const idAudio = `#som_${instrument}`;

    key.onclick = function ()  {
        playSong(idAudio);
    }

}