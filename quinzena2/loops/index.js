// EXERCÍCIOS DE INTERPRETAÇÃO

// Exercício 01

// O código está verificando o valor de "i", e quando ele for menor que 5, ele executa o código de incremento, somando o valor atual de "i" + 1, repetindo a ação até o "i" não satisfazer mais a condição de i < 5. O resultado impresso é "5".

// Exercício 02
// a) será impresso no console:
// 19
// 21 
// 23
// 25
// 27
// 30

// b) Sim, é suficiente. No código de execução seria usado um indexOf().

// Exercício 03
// Será impresso:
// *
// **
// ***
// ****

// EXERCÍCIOS DE ESCRITA

// Exercício 01
// a)
const quantidadesDePets = Number(prompt("Quantos bichinhos de estimação você tem?"))
let nomesDeTodosOsPets = []
// b)
if (quantidadesDePets === 0){
    console.log ("Que pena! Você pode adotar um pet!")
} else{
    let i = 0
    
    while (quantidadesDePets > i) {
        let nomeDoPet = prompt ("Digite o nome do pet.")

        nomesDeTodosOsPets.push (nomeDoPet)
        
        i++
    }

}
// c)
console.log (nomesDeTodosOsPets)


// Exercício 02

// a) 

function imprimeValoresDoArray (array) {
    for (let numero of array) {
        console.log (numero)
    }
}

// b)
function imprimeValoresDivididoPor10 (array) {
    for (let numero of array) {
        console.log (numero / 10)
    }
}

// c)
function novoArrayDeNumeroPares (array) {
    let arrayDeNumeroPares = []
    for (let numero of array) {
        
        if (numero % 2 ===0) {
            arrayDeNumeroPares.push (numero)
        }
    } console.log (arrayDeNumeroPares)
}

// d)
function arraComStrings (array) {
    let novoArrayComStrings = []
    i = 0
    const tamanhoDoArray = array.length
    while (i < tamanhoDoArray){
        novoArrayComStrings.push (`O elemento do índex ${i} é: ${array[i]}`)
        
        i++
    }
    console.log (novoArrayComStrings)

    
}

// e)
function maiorEMenorNumeros (array) {
    let valorMaior = 0
    let valorMenor = 999999999999999999999999999999999999999999999999
    for (let numero of array) {
        if (numero > valorMaior) {
            valorMaior = numero
        }
    }
    for (let numero2 of array) {
        if (numero2 < valorMenor) {
            valorMenor = numero2
        }
    }

    console.log (`O maior número é ${valorMaior} e o menor é ${valorMenor}`)
}


// imprimeValoresDoArray ([80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55])


// imprimeValoresDivididoPor10 ([80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55])

// novoArrayDeNumeroPares ([80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55])

// arraComStrings ([80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55])

// maiorEMenorNumeros ([80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55])



// DESAFIOS

// Desafio 01

const primeiroJogador = Number(prompt("Digite o número que você está pensando."))

console.log ("Vamos jogar!")

let segundoJogador = Number(prompt("Qual número o Jogador 1 está pensando?"))

let i = 1

while (primeiroJogador !== segundoJogador) {
    i++
    if (primeiroJogador > segundoJogador) {
        console.log (`O número chutado foi ${segundoJogador}.`)
        console.log (`Errooou!! O número escolhido é MAIOR`)
    } 
    else if (primeiroJogador < segundoJogador) {
        console.log (`O número chutado foi ${segundoJogador}.`)
        console.log (`Errooou!! O número escolhido é MENOR`)
    }

    segundoJogador = Number(prompt("Você errou!! Tente outro número."))

}

console.log (`Parabéns!! Você Acertou! O número escolhido foi ${segundoJogador}. O número de tentativas foi: ${i}`)


// Desafio 02
const jogadorComputador = Math.floor(Math.random() * 101)

console.log ("Vamos jogar!")

let jogadorUsuario = Number(prompt("Qual número o Computador está pensando?"))

let i2 = 1

while (jogadorComputador !== jogadorUsuario) {
    i2++
    if (jogadorComputador > jogadorUsuario) {
        console.log (`O número chutado foi ${jogadorUsuario}.`)
        console.log (`Errooou!! O número escolhido é MAIOR`)
    } 
    else if (jogadorComputador < jogadorUsuario) {
        console.log (`O número chutado foi ${jogadorUsuario}.`)
        console.log (`Errooou!! O número escolhido é MENOR`)
    }

    jogadorUsuario = Number(prompt("Você errou!! Tente outro número."))

}

console.log (`Parabéns!! Você Acertou! O número escolhido foi ${jogadorUsuario}. O número de tentativas foi: ${i2}`)

// Sim, foi fácil fazer a alteração. Dei uma rápida pesquisada no google sobre como sortear números aleatórios, e apena implementei o código de sorteio no meu programa. Só depois que fui ver nas dicas que tinha explicando como fazer o sorteio do número. Mas nas dicas explica através de função, e no google achei um método que faz direto sem precisar de função.