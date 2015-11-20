/*
 
 Versão numero 2.2
 
 
 @author Mateus Gabi    [@matgabi17 on Twitter]
 @author Renan Benatti
 
 */

// Valores únicos

var a = criarUnico();
var b = criarUnico();
var c = criarUnico();
var d = criarUnico();

//Limitante
var e = 7;

// Função que retorna um número aleatório
function criarUnico() {

    var sorteados = [];
    var valorMaximo = 8;

    if (sorteados.length == valorMaximo) {
        if (confirm('#'))
            sorteados = [];
        else
            return;
    }
    var sugestao = Math.ceil(Math.random() * valorMaximo);
    while (sorteados.indexOf(sugestao) >= 0) {
        sugestao = Math.ceil(Math.random() * valorMaximo);
    }
    sorteados.push(sugestao);
    return sugestao;
}

var w = [
//[Susbstantivo Comum], [Substantivo Próprio], [adjetivo], [advérbio], [verbo]
"amor", "Amanda", "amigável", "ante-ontem",
"banana", "Bruna", "baixinho", "bastante",
"coração", "Carla", "carinhosa", "carinhosamente",
"dedo", "Diego", "devagar",
"esquerdo", "Eduardo", "esquerdo", "estudar",
"faca", "Fabiana", "fácil", "facilmente", "ficar",
"goiabada", "Goiás", "gostosa", "gritar",
"homem", "Hungria", "hoje",
"igreja", "Iara", "ignorante",
"joaninha", "João", "jurássico", "jamais",
"Keila",
"limão", "Luísa", "lituano",
"maneta", "Mateus", "memorável", "muito",
"navio", "Naiara", "nunca", "natal", "nascer",
"oligarquia", "Osório",
"patinho", "Pedro", "preto",
"queijo",
"rua", "Raíssa", "ruiva",
"salada", "Silvia",
"tecnologia", "Thiago",
"urso", "Úrsula", "unha",
"vegano", "Vitória", "verde", "vencedor",
"Wellington",
"xadrez", "Xico",
"Ygritte",
"zebra",
"abano",
"boliche",
"chuchu",
"divindade",
"espelho",
"festança",
"gigante",
"hospital",
"indubitável",
"jato",
"liquidificar",
"namorar"
];

function printarFrase() {

    var retorno = "";

    for (i = 0; i < e; i++) {

        //var w[] = getWords();

        // função para encontrar elemento no vetor
        // f será o indice
        var f = i * a - b + i * c - d;

        // if (f > w.length || f < 0) {
        //     do nothing
        // } else {
        //     retorno += " " + w[f];
        // }

        if (f < w.length || f > 0) {
            retorno += " " +w[f];
        };

    }

    return document.getElementById('frase').innerHTML = retorno;
}

function printarWordsStatus() {
    var p = 0;

    for (var i = 1; i <= e; i++) {
        p += Math.pow(w.length, i);
    }

    p = parseInt(p / Math.pow(10, 12)); // Resultado Inteiro em Trilhões

    // p = parseInt(p);

    return document.getElementById("statusWord").innerHTML = w.length + " words available and " + p + "T+ possibilities!";
}

function combinations() { 
    var p = 0;

    for (var i = 1; i <= e; i++) {
        p += Math.pow(w.length, i);
    }

    return p;
}