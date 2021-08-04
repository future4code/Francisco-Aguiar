// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// Exercício 01
// a) O código solicita ao usuário para digitar um número, e verifica se esse número é divisível por 2, ou seja, se o reto da divisão desse número por 2 é igual a zero. Ele testa se o número é par.

// b) Números pares.

// c) Números ímpares.

// Exercício 02
// a) Para informar o preço da fruta solicitada pelo usuário.

// b) "O preço da fruta  Maçã  é  R$  2.25"

// c) "O preço da fruta  Maçã  é  R$  5"

// Exercício 03
// a) Pedindo para o usuário digitar um número, e transformando essa string em number.

// b)
/* A Mensagem será:
"Esse número passou no teste"

Se o número for -10, não irá imprimir nada.
*/ 

// c) Sim, haverá uma mensagem de erro. A variável "mensagem" foi definida dentro do escopo filho, sendo assim não poderá ser acessada no escopo global. 

// EXERCÍCIOS DE ESCRITA

// Exercício 01

const idadeDoUsuario = Number(prompt("Digite sua idade."))

if (idadeDoUsuario >= 18) {
    console.log("Você pode dirigir.")
} else {
    console.log("Você não pode dirigir.")
}

// Exercício 02

const turnoDoEstudante = prompt (`Qual turno você estuda? Digite M - Matutino / V - Vespertino / N - Noturno`)

if (turnoDoEstudante.toUpperCase() === "M") {
    console.log ("Bom Dia!")
}
else if (turnoDoEstudante.toUpperCase() === "V") {
    console.log ("Boa Tarde!")
}
else if (turnoDoEstudante.toUpperCase() === "N"){
    console.log ("Boa Noite!")
}
else { console.log ("Digite um turno válido!")}

// Exercício 03

let turnoDoEstudante2 = prompt (`Qual turno você estuda? Digite M - Matutino / V - Vespertino / N - Noturno`)

turnoDoEstudante2 = turnoDoEstudante2.toUpperCase()

switch (turnoDoEstudante2){
    case 'M' :
        console.log ("Bom Dia!")
        break
    case 'V' :
        console.log ("Boa Tarde!")
        break
    case 'N' :
        console.log ("Boa Noite!")
        break
    default:
        console.log ("Digite um turno válido!")
        break
}

// Exercício 04

const generoDoFilme = prompt ("Qual gênero do filme que irá assistir?")

const precoIngresso = Number(prompt ("Qual o preço do ingresso?"))

if (generoDoFilme.toLowerCase() === "fantasia" && precoIngresso < 15) {
    console.log ("Bom Filme!")
} else {console.log ("Escolha outro filme :(")}


// DESAFIOS

// 01

const generoDoFilme2 = prompt ("Qual gênero do filme que irá assistir?")

const precoIngresso2 = Number(prompt ("Qual o preço do ingresso?"))

if (generoDoFilme2.toLowerCase() === "fantasia" && precoIngresso2 < 15) {
    const lanchinho = prompt ("Qual lanchinho você vai comprar?")
    console.log ("Bom Filme!", `Aproveite o seu/sua ${lanchinho}.`)
} else {console.log ("Escolha outro filme :(")}


// 02

const nomeCompletoComprador = prompt ("Digite seu nome completo.")
const tipoJogo = prompt ("Digite o tipo do jogo. (IN - internacional / DO - doméstico)")
const etapaJogo = prompt("Qual a etapa do jogo? (SF - semifinal / DT - decisão terceiro lugar / FI - final)")
const categoria = Number(prompt ("Qual a categoria? (1 , 2 , 3 ou 4)"))
const quantidadeIngressos = Number(prompt("Digite a quantidade de ingressos."))

console.log ("---Dados da compra---")
console.log (`Nome do cliente: ${nomeCompletoComprador}`)

let valorIngresso

if (tipoJogo.toUpperCase() === "DO") {
    console.log( "Tipo do jogo: Nacional")

    if(etapaJogo.toUpperCase() === "SF") {
        console.log ("Etapa do jogo: Semifinal")

        if (categoria === 1){
            valorIngresso = 1320
            console.log ("Categoria: 1")
            console.log (`Quantidade de Ingressos: ${quantidadeIngressos} ingressos`)
            console.log ("---Valores---")
            console.log ("Valor do ingresso: R$", valorIngresso)
            console.log ("Valor total: R$", quantidadeIngressos*valorIngresso)
        } else if (categoria === 2){
            valorIngresso = 880
            console.log ("Categoria: 2")
            console.log (`Quantidade de Ingressos: ${quantidadeIngressos} ingressos`)
            console.log ("---Valores---")
            console.log ("Valor do ingresso: R$", valorIngresso)
            console.log ("Valor total: R$", quantidadeIngressos*valorIngresso)
        } else if (categoria === 3) {
            valorIngresso = 550
            console.log ("Categoria: 3")
            console.log (`Quantidade de Ingressos: ${quantidadeIngressos} ingressos`)
            console.log ("---Valores---")
            console.log ("Valor do ingresso: R$", valorIngresso)
            console.log ("Valor total: R$", quantidadeIngressos*valorIngresso)
        } else if (categoria === 4) {
            valorIngresso = 220
            console.log ("Categoria: 4")
            console.log (`Quantidade de Ingressos: ${quantidadeIngressos} ingressos`)
            console.log ("---Valores---")
            console.log ("Valor do ingresso: R$", valorIngresso)
            console.log ("Valor total: R$", quantidadeIngressos*valorIngresso)
        } else {console.log ("Digite uma categoria válida.")}




    } else if (etapaJogo.toUpperCase() === "DT"){
        console.log ("Etapa do jogo: Decisão do 3º lugar")

        if (categoria === 1){
            valorIngresso = 660
            console.log ("Categoria: 1")
            console.log (`Quantidade de Ingressos: ${quantidadeIngressos} ingressos`)
            console.log ("---Valores---")
            console.log ("Valor do ingresso: R$", valorIngresso)
            console.log ("Valor total: R$", quantidadeIngressos*valorIngresso)
        } else if (categoria === 2){
            valorIngresso = 440
            console.log ("Categoria: 2")
            console.log (`Quantidade de Ingressos: ${quantidadeIngressos} ingressos`)
            console.log ("---Valores---")
            console.log ("Valor do ingresso: R$", valorIngresso)
            console.log ("Valor total: R$", quantidadeIngressos*valorIngresso)
        } else if (categoria === 3) {
            valorIngresso = 330
            console.log ("Categoria: 3")
            console.log (`Quantidade de Ingressos: ${quantidadeIngressos} ingressos`)
            console.log ("---Valores---")
            console.log ("Valor do ingresso: R$", valorIngresso)
            console.log ("Valor total: R$", quantidadeIngressos*valorIngresso)
        } else if (categoria === 4) {
            valorIngresso = 170
            console.log ("Categoria: 4")
            console.log (`Quantidade de Ingressos: ${quantidadeIngressos} ingressos`)
            console.log ("---Valores---")
            console.log ("Valor do ingresso: R$", valorIngresso)
            console.log ("Valor total: R$", quantidadeIngressos*valorIngresso)
        } else {console.log ("Digite uma categoria válida.")}
        
    } else if (etapaJogo.toUpperCase() === "FI"){
        console.log ("Etapa do jogo: Final")

        if (categoria === 1){
            valorIngresso = 1980
            console.log ("Categoria: 1")
            console.log (`Quantidade de Ingressos: ${quantidadeIngressos} ingressos`)
            console.log ("---Valores---")
            console.log ("Valor do ingresso: R$", valorIngresso)
            console.log ("Valor total: R$", quantidadeIngressos*valorIngresso)
        } else if (categoria === 2){
            valorIngresso = 1320
            console.log ("Categoria: 2")
            console.log (`Quantidade de Ingressos: ${quantidadeIngressos} ingressos`)
            console.log ("---Valores---")
            console.log ("Valor do ingresso: R$", valorIngresso)
            console.log ("Valor total: R$", quantidadeIngressos*valorIngresso)
        } else if (categoria === 3) {
            valorIngresso = 880
            console.log ("Categoria: 3")
            console.log (`Quantidade de Ingressos: ${quantidadeIngressos} ingressos`)
            console.log ("---Valores---")
            console.log ("Valor do ingresso: R$", valorIngresso)
            console.log ("Valor total: R$", quantidadeIngressos*valorIngresso)
        } else if (categoria === 4) {
            valorIngresso = 330
            console.log ("Categoria: 4")
            console.log (`Quantidade de Ingressos: ${quantidadeIngressos} ingressos`)
            console.log ("---Valores---")
            console.log ("Valor do ingresso: R$", valorIngresso)
            console.log ("Valor total: R$", quantidadeIngressos*valorIngresso)
        } else {console.log ("Digite uma categoria válida.")}
    } else {console.log ("Digite uma etapa do jogo válida.")}


} else if (tipoJogo.toUpperCase() === "IN") {
    console.log( "Tipo do jogo: Internacional")

    if(etapaJogo.toUpperCase() === "SF") {
        console.log ("Etapa do jogo: Semifinal")

        if (categoria === 1){
            valorIngresso = 1320 * 4.10
            console.log ("Categoria: 1")
            console.log (`Quantidade de Ingressos: ${quantidadeIngressos} ingressos`)
            console.log ("---Valores---")
            console.log ("Valor do ingresso: U$", valorIngresso)
            console.log ("Valor total: U$", quantidadeIngressos*valorIngresso)
        } else if (categoria === 2){
            valorIngresso = 880 * 4.10
            console.log ("Categoria: 2")
            console.log (`Quantidade de Ingressos: ${quantidadeIngressos} ingressos`)
            console.log ("---Valores---")
            console.log ("Valor do ingresso: U$", valorIngresso)
            console.log ("Valor total: U$", quantidadeIngressos*valorIngresso)
        } else if (categoria === 3) {
            valorIngresso = 550 * 4.10
            console.log ("Categoria: 3")
            console.log (`Quantidade de Ingressos: ${quantidadeIngressos} ingressos`)
            console.log ("---Valores---")
            console.log ("Valor do ingresso: U$", valorIngresso)
            console.log ("Valor total: U$", quantidadeIngressos*valorIngresso)
        } else if (categoria === 4) {
            valorIngresso = 220 * 4.10
            console.log ("Categoria: 4")
            console.log (`Quantidade de Ingressos: ${quantidadeIngressos} ingressos`)
            console.log ("---Valores---")
            console.log ("Valor do ingresso: U$", valorIngresso)
            console.log ("Valor total: U$", quantidadeIngressos*valorIngresso)
        } else {console.log ("Digite uma categoria válida.")}




    } else if (etapaJogo.toUpperCase() === "DT"){
        console.log ("Etapa do jogo: Decisão do 3º lugar")

        if (categoria === 1){
            valorIngresso = 660 * 4.10
            console.log ("Categoria: 1")
            console.log (`Quantidade de Ingressos: ${quantidadeIngressos} ingressos`)
            console.log ("---Valores---")
            console.log ("Valor do ingresso: U$", valorIngresso)
            console.log ("Valor total: U$", quantidadeIngressos*valorIngresso)
        } else if (categoria === 2){
            valorIngresso = 440 * 4.10
            console.log ("Categoria: 2")
            console.log (`Quantidade de Ingressos: ${quantidadeIngressos} ingressos`)
            console.log ("---Valores---")
            console.log ("Valor do ingresso: U$", valorIngresso)
            console.log ("Valor total: U$", quantidadeIngressos*valorIngresso)
        } else if (categoria === 3) {
            valorIngresso = 330 * 4.10
            console.log ("Categoria: 3")
            console.log (`Quantidade de Ingressos: ${quantidadeIngressos} ingressos`)
            console.log ("---Valores---")
            console.log ("Valor do ingresso: U$", valorIngresso)
            console.log ("Valor total: U$", quantidadeIngressos*valorIngresso)
        } else if (categoria === 4) {
            valorIngresso = 170 * 4.10
            console.log ("Categoria: 4")
            console.log (`Quantidade de Ingressos: ${quantidadeIngressos} ingressos`)
            console.log ("---Valores---")
            console.log ("Valor do ingresso: U$", valorIngresso)
            console.log ("Valor total: U$", quantidadeIngressos*valorIngresso)
        } else {console.log ("Digite uma categoria válida.")}
        
    } else if (etapaJogo.toUpperCase() === "FI"){
        console.log ("Etapa do jogo: Final")

        if (categoria === 1){
            valorIngresso = 1980 * 4.10
            console.log ("Categoria: 1")
            console.log (`Quantidade de Ingressos: ${quantidadeIngressos} ingressos`)
            console.log ("---Valores---")
            console.log ("Valor do ingresso: U$", valorIngresso)
            console.log ("Valor total: U$", quantidadeIngressos*valorIngresso)
        } else if (categoria === 2){
            valorIngresso = 1320 * 4.10
            console.log ("Categoria: 2")
            console.log (`Quantidade de Ingressos: ${quantidadeIngressos} ingressos`)
            console.log ("---Valores---")
            console.log ("Valor do ingresso: U$", valorIngresso)
            console.log ("Valor total: U$", quantidadeIngressos*valorIngresso)
        } else if (categoria === 3) {
            valorIngresso = 880 * 4.10
            console.log ("Categoria: 3")
            console.log (`Quantidade de Ingressos: ${quantidadeIngressos} ingressos`)
            console.log ("---Valores---")
            console.log ("Valor do ingresso: U$", valorIngresso)
            console.log ("Valor total: U$", quantidadeIngressos*valorIngresso)
        } else if (categoria === 4) {
            valorIngresso = 330 * 4.10
            console.log ("Categoria: 4")
            console.log (`Quantidade de Ingressos: ${quantidadeIngressos} ingressos`)
            console.log ("---Valores---")
            console.log ("Valor do ingresso: U$", valorIngresso)
            console.log ("Valor total: U$", quantidadeIngressos*valorIngresso)
        } else {console.log ("Digite uma categoria válida.")}
    } else {console.log ("Digite uma etapa do jogo válida.")}


} else {console.log ("Digite um tipo de jogo válido.")}

