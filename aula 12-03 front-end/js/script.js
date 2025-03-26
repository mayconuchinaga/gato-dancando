// Obtém o botão e o áudio
// Obtém os botões e o áudio
const btnLigar = document.getElementById("btnLigar");
const btnDesligar = document.getElementById("btnDesligar");
const audio = document.getElementById("audio");
const imgOlhos = document.getElementById("imgOlhos");
const imgLampada = document.getElementById("imgLampada");

// Função para tocar o áudio
function tocarSom() {
  audio.play();  // Toca o som
}

// Função para parar o áudio
function pararSom() {
  audio.pause();  // Pausa o áudio
  audio.currentTime = 0;  // Reinicia o áudio para o início
}

// Adiciona o evento de clique ao Botão 1
btnLigar.addEventListener("click", tocarSom);

btnDesligar.addEventListener("click", pararSom);

function mudarImagem() {
  var imgLampada = document.getElementById('imgLampada');
  imgLampada.src = 'img/imgGatodancando.gif';
}

function voltarImagem() {
  var imagem = document.getElementById('imagem');
  imgLampada.src = 'img/images.jpg';
}

