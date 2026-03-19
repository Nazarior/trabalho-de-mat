let num1, num2;
let pontos = 0;
let contadorPergunta = 0;
const totalPerguntas = 4;

window.onload = gerarPergunta;

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gerarPergunta() {
    if (contadorPergunta >= totalPerguntas) {
        finalizarJogo();
        return;
    }

    num1 = numeroAleatorio(1, 50);
    num2 = numeroAleatorio(1, 50); 

    if (num2 > num1) {
    let temp = num1;
    num1 = num2;
    num2 = temp;
}

    document.getElementById("pergunta").innerText = `${num1} - ${num2} = ?`;
    document.getElementById("resposta").value = '';

    contadorPergunta++;
    document.getElementById("contador").innerText = contadorPergunta;
}

function mostrarPopup(mensagem, tempo = 3000) {
    const popup = document.getElementById("popup");
    document.getElementById("mensagem").innerText = mensagem;
    popup.style.display = "flex";

    setTimeout(() => {
        popup.style.display = "none";
        if (contadorPergunta < totalPerguntas) {
            gerarPergunta();
        }
    }, tempo);
}

function checarResposta() {
    const respostaUsuario = Number(document.getElementById("resposta").value);
    const respostaCorreta = num1 - num2;

    if (respostaUsuario === respostaCorreta) {
        pontos++;
        document.getElementById("pontos").innerText = pontos;
        mostrarPopup("✅ Parabéns! Você acertou!", 2000);
    } else {
        mostrarPopup(`❌ Errado! A resposta certa é ${respostaCorreta}`, 2000);
    }
}

function finalizarJogo() {
    let mensagemFinal = pontos >= 3
        ? `Você ganhou! Morangos: ${pontos}`
        : `Você perdeu! Morangos: ${pontos}`;

    mostrarPopup(mensagemFinal, 3000);

    setTimeout(() => {
        pontos = 0;
        contadorPergunta = 0;
        document.getElementById("pontos").innerText = pontos;
        document.getElementById("contador").innerText = contadorPergunta;
        gerarPergunta();
    }, 5000);
}