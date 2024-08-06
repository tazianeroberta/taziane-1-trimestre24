const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-Alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "pergunta 1",
        alternativa:["alternativa 1", "alternativa 2"]
    },
    {
        enunciado: "pergunta 2",
        alternativa:["alternativa 1", "alternativa 2"]
    },
    {
        enunciado: "pergunta 3",
        alternativa:["alternativa 1", "alternativa 2"]
    }
]

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent="";
    mostraAlternativas();
}

function mostraAlternativas(){
    for( const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button"); 
        botaoAlternativas.textContent = alternativa; 
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();

