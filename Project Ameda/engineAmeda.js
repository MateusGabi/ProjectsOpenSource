/*
 
 Versão 2.2.4 
 
 @author Mateus Gabi    [@matgabi17 on Twitter]
 @author Renan Benatti  [@renanbdias on Twitter]
 
 */

//  'a', 'b', 'c' e 'd' são variáveis do tipo 'integer' e recebem valores sorteados;

// var a = criarUnico();
// var b = criarUnico();
// var c = criarUnico();
// var d = criarUnico();

//  Valor limite de prints de palavras, ou seja, a Ameda printará entre 0 e 7 palavras;
var e = 4;

//  Função que retorna um número aleatório
// function criarUnico()
// {

//     var sorteados = [];
//     var valorMaximo = 8;

//     if (sorteados.length == valorMaximo)
//     {
//         if (confirm('#'))
//             sorteados = [];
//         else
//             return;
//     }

//     var sugestao = Math.ceil(Math.random() * valorMaximo);

//     while (sorteados.indexOf(sugestao) >= 0)
//         sugestao = Math.ceil(Math.random() * valorMaximo);

//     sorteados.push(sugestao);

//     return sugestao;
// }

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

    var f = -1;

    for (i = 1; i <= e; i++) {

        //var w[] = getWords();

        // função para encontrar elemento no vetor
        // f será o indice do vetor w

        var _f = parseInt(Math.random() * w.length);

        if (f == _f)
            i--;
        else
            f = _f;

        // if (f > w.length || f < 0) {
        //     do nothing
        // } else {
        //     retorno += " " + w[f];
        // }

        if (f > 0 && f < w.length)
            retorno += " " + w[f]

    }

    return document.getElementById('frase').innerHTML = "<input id=\"ph\" class=\"form-control input-lg\" type=\"text\" placeholder=\"Carregando...\" value=\"" + retorno + "\" readonly>";
}

// Resultado Inteiro em Trilhões

function printarWordsStatus() {
    var p = 0;

    for (var i = 1; i <= e; i++)
        p += Math.pow(w.length, i);

    p = parseInt(p / Math.pow(10, 6));

    // p = parseInt(p);

    return document.getElementById("statusWord").innerHTML = "Nós temos " + w.length + " palavras disponíveis em " + p + " milhões de combinações distintas!";
}

// We don't need it

// function combinations()
// {

//     var p = 0;

//     for (var i = 1; i <= e; i++)
//         p += Math.pow(w.length, i);

//     return p;
// }
