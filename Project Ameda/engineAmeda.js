/*

    Versão numero 2.0.2

        
    @author Mateus Gabi
    @author Renan Benatti

*/


/* Função que retorna um número aleatório */
function criarUnico() {if (sorteados.length == valorMaximo) {if (confirm('Já não há mais! Quer recomeçar?')) sorteados = []; else return; } var sugestao = Math.ceil(Math.random() * valorMaximo); while (sorteados.indexOf(sugestao) >= 0) {sugestao = Math.ceil(Math.random() * valorMaximo); } sorteados.push(sugestao); return sugestao;}


var sorteados = [];
var valorMaximo = 8;

var a = criarUnico();
var b = criarUnico();
var c = criarUnico();
var d = criarUnico();

var e = 7;

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

function printarFrase()
{

    var retorno = "";

    for(i=0; i<e; i++)
    {

        var f = i*a - b + i*c - d;

        if(f>w.length || f<0)
        {
            /*do nothing*/
        } 
        
        else
        {
            retorno += " "+w[f];
        }

    }

    return document.getElementById('frase').innerHTML = retorno;
}

function printarWordsStatus()
{
    var p = 0;

    for (var i = 1; i <= e; i++)
    {
        p += Math.pow(w.length, i);
    }

    p = p / Math.pow(10, 12); // Resultado em Trilhões

    p = parseInt(p);

    return document.getElementById("statusWord").innerHTML = w.length +" words available and "+ p +"T+ possibilities!"; 
}

function combinations()
{
    for (var i = 1; i <= e; i++)
    {
        p += Math.pow(w.length, i);
    }

    return p;
}