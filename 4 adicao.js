let num1; 
let num2;
let pontos = 0;
let contadorPergunta = 0;
let totalPergunta = 4;

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
window.addEventListener("DOMContentLoaded", gerarPergunta); 

function gerarPergunta() {
    if (contadorPergunta >= totalPergunta) {
        finalizarJogo();
        return;
    }

num1 = numeroAleatorio(1, 50);
num2 = numeroAleatorio(1, 50); 

document.getElementById("pergunta").innerText = `${num1} + ${num2} = ?`;
document.getElementById("resposta").value = '';
}

function mostrarPopup(mensagem, tempo = 2000) {

    const popup = document.getElementById("popup");
    document.getElementById("mensagem").innerText = mensagem;
    popup.style.display = "flex";

    setTimeout(() => {
        popup.style.display = "none";
        if (contadorPergunta < totalPergunta) {
            gerarPergunta();
        } else {
            finalizarJogo();
        }
    }, tempo);
}
//agora ate aqui ta certo 

function checarResposta() {
    const respostaUsuario = Number(document.getElementById("resposta").value);
    const respostaCorreta = num1 + num2;

    contadorPergunta++;
    document.getElementById("contador").innerText = contadorPergunta;

    if (respostaUsuario === respostaCorreta) {
        pontos++;
        document.getElementById("pontos").innerText = pontos;
        mostrarPopup("Parabéns! Você acertou!", 3000);
    } else {
        mostrarPopup(`Errado! A resposta certa é ${respostaCorreta}`, 3000);
    }
}


function finalizarJogo() {
    mostrarPopup(`Fim do jogo! Você fez ${pontos} pontos!`, 4000);
}