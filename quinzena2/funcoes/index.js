// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// Exercício 01
// a) Irá aparecer no console "Undefined", pois a minhaFuncao não foi invocada
// Errei... e entendi o motivo... a função foi invocada dentro do console.log.

// b) Não irá aparecer nada no console, pois não foi solicitado o comando de imprimir no console.


// Exercício 02
// a) Essa função imprime no console um booleano verificando se a palavra "cenoura" está contida no Texto que o usuário digitou no prompt. 
// b) true / true /true


// EXERCÍCIOS DE ESCRITA DE CÓDIGO


// Exercício 01
// a)

function minhasInformacoesPessoais() {
    console.log ("Eu sou Hugo, tenho 25 anos, moro em Frecheirinha-Ce e sou estudante.")
}

minhasInformacoesPessoais()

// b) 

function informacoesPessoais(nome, idade, cidade, profissão) {
    console.log (`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissão}.`)
} 

informacoesPessoais("Francisco", 25, "Frecheirinha", "Vendedor")

// Exercício 02
// a)

function soma(numero1 , numero2) {
    const operacaoSoma = numero1 + numero2
    return operacaoSoma 
}

console.log(soma(1,2))

// b)

function umaFuncao(primeiroNumero, segundoNumero) {
    const comparacaoEntreNumeros = primeiroNumero >= segundoNumero
    return comparacaoEntreNumeros
}

console.log(umaFuncao(10,12))

// c) 

function segundaFuncao(numeroQualquer) {
    const parImpar = numeroQualquer % 2 === 0
    return parImpar
}

console.log (segundaFuncao(10))

// d)

function mensagem (texto) {
    console.log (`Tamanho da mensagem = ${texto.length}`)
    console.log (texto.toUpperCase())
}

mensagem("Olá Mundo!")

//Exercício 03

function somatorio (maisUmNumero, maisOutroNumero){
    const outroSomatorio = maisUmNumero + maisOutroNumero
    return outroSomatorio
}

function subtracao (numeroNovamente , segundoNumeroNovamente) {
    const operacaoSubtracao = numeroNovamente - segundoNumeroNovamente
    return operacaoSubtracao
}

function multiplicacao(numeracao1, numeracao2){
    const operacaoMultiplica = numeracao1 * numeracao2
    return operacaoMultiplica
}

function divisao(numeracao3 , numeracao4){
    const operacaoDivisao = numeracao3 / numeracao4
    return operacaoDivisao
}

const primeiroNumeroDoUsuario = Number(prompt("Digite um número."))
const segundoNumeroDoUsuario = Number(prompt("Digite outro número."))

console.log (somatorio(primeiroNumeroDoUsuario, segundoNumeroDoUsuario))
console.log (subtracao(primeiroNumeroDoUsuario, segundoNumeroDoUsuario))
console.log (multiplicacao(primeiroNumeroDoUsuario, segundoNumeroDoUsuario))
console.log (divisao(primeiroNumeroDoUsuario, segundoNumeroDoUsuario))


// DESAFIO

// 01
// a)

const imprimirParametro = (parametro) => {
    console.log(parametro)
}

let invocaFuncao = imprimirParametro("Hugo")
invocaFuncao = imprimirParametro(800000008)

// b)

const funcaoSomaParametros = (valor1, valor2) => {
    const somaValores = valor1 + valor2
    return somaValores
}

let resultadoFuncaoSomaParametros = funcaoSomaParametros(1, 2)
invocaFuncao = imprimirParametro(resultadoFuncaoSomaParametros)

// 02

function teoremaPitagoras (cateto1, cateto2) {
    const hipotenusa = Math.sqrt((cateto1*cateto1) + (cateto2*cateto2))
    return hipotenusa
}

let resultadoHipotenusa = teoremaPitagoras(3,4)

console.log(`Hipotenusa= ${resultadoHipotenusa}`)
