// Variáveis globais
let num1, num2;
let pontos = 0;
let contadorPergunta = 0;
const totalPerguntas = 4;

// Gera a primeira pergunta assim que a página carrega
window.onload = gerarPergunta;

// Função para gerar número aleatório
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
num1 = numeroAleatorio(1, 100);
num2 = numeroAleatorio(1, 100);

document.getElementById("pergunta").innerText = `${num1} + ${num2} = ?`;
document.getElementById("resposta").value = '';

    contadorPergunta++;
    document.getElementById("contador").innerText = contadorPergunta;


// Função para gerar nova pergunta
function gerarPergunta() {
    if (contadorPergunta >= totalPerguntas) {
        finalizarJogo();
        return;
    }


// Função do pop-up automático
function mostrarPopup(mensagem, tempo = 2000) {
    const popup = document.getElementById("popup");
    document.getElementById("mensagem").innerText = mensagem;
    popup.style.display = "flex";

    setTimeout(() => {
        popup.style.display = "none";
        // Gera próxima pergunta apenas se não tiver acabado
        if (contadorPergunta < totalPerguntas) {
            gerarPergunta();
        }
    }, tempo);
}

// Função para conferir resposta
function checarResposta() {
    const respostaUsuario = Number(document.getElementById("resposta").value);
    const respostaCorreta = num1 + num2;

    if (respostaUsuario === respostaCorreta) {
        pontos++;
        document.getElementById("pontos").innerText = pontos;
        mostrarPopup("✅ Parabéns! Você acertou!", 2000);
    } else {
        mostrarPopup(`❌ Errado! A resposta certa é ${respostaCorreta}`, 2000);
    }

// Após o tempo do pop-up, a primeira pergunta será gerada automaticamente
    setTimeout(gerarPergunta, 3000);
}

function finalizarJogo() {
    let mensagemFinal = pontos >= 3 ?
        `🎉 Você ganhou! Morangos conquistados: ${pontos}` :
        `😢 Você perdeu! Morangos conquistados: ${pontos}`;

    // Mostra pop-up final
    mostrarPopup(mensagemFinal, 3000);

    // Resetar jogo APÓS o tempo do pop-up
    setTimeout(() => {
        pontos = 0;
        contadorPergunta = 0;
        document.getElementById("pontos").innerText = pontos;
        document.getElementById("contador").innerText = contadorPergunta;

        // Limpar mensagem final
        document.getElementById("mensagem-final").innerText = "";

        // Começar nova rodada
        gerarPergunta();
    }, 5000);
}
}
