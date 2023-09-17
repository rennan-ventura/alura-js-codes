const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const titulo = document.querySelector('.app__title');
const imagem = document.querySelector('.app__image');
const botoes = document.querySelectorAll('.app__card-button');
const startPauseBt = document.querySelector('#start-pause');
const musicaFocoInput = document.querySelector('#alternar-musica');
const iniciarOuPausarBt = document.querySelector('#start-pause span');
const playIcon = document.querySelector('.app__card-primary-butto-icon');
const timer = document.querySelector('#timer');

const musica = new Audio('./sons/luna-rise-part-one.mp3');
const beepSong = new Audio('./sons/beep.mp3');
const pauseSong = new Audio('./sons/pause.mp3');
const playSong = new Audio('./sons/play.wav');
musica.loop = true;

let tempoDecorrido = 1500;
let intervaloId = null;



musicaFocoInput.addEventListener('change', () => {
    if(musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
})

focoBt.addEventListener('click', () => {
    tempoDecorrido = 1500;
    alterarContexto('foco');
    focoBt.classList.add('active');
});

curtoBt.addEventListener('click', () => {
    tempoDecorrido = 300;
    alterarContexto('descanso-curto');
    curtoBt.classList.add('active');
});

longoBt.addEventListener('click',  () => {
    tempoDecorrido = 900;
    alterarContexto('descanso-longo');
    longoBt.classList.add('active');
});


function alterarContexto(contexto) {
    mostrarTempo();
    botoes.forEach(function (contexto){
        contexto.classList.remove('active');
    })
    html.setAttribute('data-contexto', contexto);
    imagem.setAttribute('src', `./imagens/${contexto}.png`);


    switch (contexto) {
        case 'foco':
            titulo.innerHTML = `
                Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
            
            break;
        
        case 'descanso-curto': 
            titulo.innerHTML = `
                Que tal dar uma respirada?,<br>
                <strong class="app__title-strong">Faça uma pausa curta!</strong>
            `
            break;
        case 'descanso-longo': 
            titulo.innerHTML = `
                Hora de voltar à superfície.<br>
                <strong class="app__title-strong">Hora de voltar à superfície.</strong>
            `
            break;
        default:
            break;
    }

}



const contagemRegressiva = () => {
    if(tempoDecorrido <= 0){   
        beepSong.play();
        alert('Tempo finalizado!');
        zerar();
        return;
    }
    tempoDecorrido -= 1;
    mostrarTempo();
}

startPauseBt.addEventListener('click', iniciarOuPausar);

function iniciarOuPausar() {
    if(intervaloId) {
        pauseSong.play();
        zerar();
        return;
    }
    playSong.play();
    intervaloId = setInterval(contagemRegressiva, 1000);
    iniciarOuPausarBt.textContent = 'Pausar';
    playIcon.setAttribute('src', './imagens/pause.png');
}

function zerar() {
    clearInterval(intervaloId);
    iniciarOuPausarBt.textContent = 'Começar';
    playIcon.setAttribute('src', './imagens/play_arrow.png');
    intervaloId = null;
}

function mostrarTempo() {
    const tempo = new Date(tempoDecorrido * 1000);
    const tempoFormatado = tempo.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'});
    timer.innerHTML = `${tempoFormatado}`;
}

mostrarTempo();