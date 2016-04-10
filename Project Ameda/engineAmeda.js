var version = "2.7";

/*

 @author Mateus Gabi    [@matgabi17 on Twitter]
 @author Renan Benatti  [@renanbdias on Twitter]
 
 */

//  Valor limite de prints de palavras, ou seja, a Ameda printará entre 0 e 7 palavras;
var e = 4;

// Vetor que armazena as palavras
var w = [
    //[Susbstantivo Comum], [Substantivo Próprio], [adjetivo], [advérbio], [verbo]
    "amor", "Amanda", "amigável", "ante-ontem", "abano",
    "banana", "Bruna", "baixinho", "bastante", "boliche",
    "chuchu", "coração", "Carla", "carinhosa", "carinhosamente",
    "dedo", "Diego", "devagar", "divindade",
    "espelho", "esquerdo", "Eduardo", "estudar",
    "faca", "Fabiana", "fácil", "facilmente", "ficar", "festança",
    "gigante", "goiabada", "Goiás", "gostosa", "gritar",
    "homem", "na Hungria", "hoje", "hospital",
    "indubitável", "igreja", "Iara", "ignorante",   
    "jato", "joaninha", "João", "jurássico", "jamais",
    "Keila",
    "limão", "Luísa", "lituano", "liquidificar",
    "namorar", "maneta", "Mateus", "memorável", "muito",
    "navio", "Naiara", "nunca", "natal", "nascer",
    "oligarquia", "Osório",
    "patinho", "Pedro", "de preto",
    "queijo",
    "rua", "Raíssa", "ruiva",
    "salada", "Silvia",
    "tecnologia", "Thiago",
    "urso", "Úrsula", "unha",
    "vegano", "Vitória", "verde", "vencedor",
    "Wellington",
    "xadrez", "Xico",
    "Ygritte",
    "zebra"  
];

// em construção! terá dois parâmetros: um inteiro 'i' e um vetor de inteiros 'array'
function contains() {
    return false;
    
    // pseudocode
    
    // se i está em Array
    //     return true
    // senão
    //     return false
    
    // obs: a implementação deste código implicará na mudança do getPhrasal()
}

function getPhrasal() {

    var retorno = "";

    // vetor de inteiros que representa os índices de w pertencentes ao retorno;
    var f = -1;

    for (i = 1; i <= e; i++) {

        //var w[] = getWords();

        // função para encontrar elemento no vetor
        // f será o indice do vetor w

        var _f = parseInt(Math.random() * w.length);        
        
        var b = false;
        if (f == _f){
            i--;
        }
        else{
            f = _f;
            b = true;
        }

        if (b)
            retorno += " " + w[f]

    }

    return document.getElementById('frase').innerHTML = "<input id=\"ph\" class=\"form-control input-lg\" type=\"text\" placeholder=\"Carregando...\" value=\"" + retorno + "\" readonly>";
}

// Resultado Inteiro em Milhões
function getStatus() {
    var p = 1;

// 87 * 86 * 85 * 84
    for (var i = 0; i < e; i++)
        p = p * (w.length - i);

    p = parseInt(p / Math.pow(10, 6));

     return "Nós temos <b>" + w.length + " Palavras</b> disponíveis em mais de <b>" + p + " Milhões</b> de combinações distintas!";
    
}

// Versão atual da Ameda
function getVersion() {
    return version;
}
