// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// Exercício 01
// a)
/* Será impresso no console:

Matheus Nachtergaele
Virginia Cavendish
canal: "Canal Brasil", horario: "19h"

*/
//Errei o terceiro console.log simplesmente por falta de atenção. :'(


// Exercício 02
// a)
/* Será impresso no console:

{nome: "Juca", idade: 3, raca: "SRD"}
{nome: "Juba", idade: 3, raca: "SRD"}
{nome: "Jubo", idade: 3, raca: "SRD"}

*/
// b) Faz o espalhamento do objeto que vem após os três pontos. Uma cópia do objeto.

// Exercício 03
// a)
/* Será impresso no console:

{nome: "Caio", idade: 23, backender: }
{nome: "Caio", idade: 23, backender: , altura: }

Errei novamente por falta de atenção. Interpretei errado o código. :((((( */
    
// b) O "false" ele deu esse retorno por conta da propriedade "backend" retornar esse booleano
// O "undefined" foi devido ao código ter adicionado a propriedade "altura" no objeto, porém não foi definido valor para ela.


// EXERCÍCIOS DE ESCRITA

// Exercício 01
// a)

const objeto1 = {
    nome: "Lays",
    apelidos: ["Laysinha", "Zinha", "Mariazinha"]
}

const funcao1 = (objetoQualquer) => {
    return `Eu sou ${objetoQualquer.nome}, mas pode me chamar de: ${objetoQualquer.apelidos[0]}, ${objetoQualquer.apelidos[1]} ou ${objetoQualquer.apelidos[2]}.`
}

let saidaDaFuncao = funcao1(objeto1)
console.log (saidaDaFuncao)

// b)

const novoObjeto = {
    ...objeto1,
    apelidos: ["Olived", "Fubiquinha", "Laliz"]
}

saidaDaFuncao = funcao1 (novoObjeto)
console.log (saidaDaFuncao)

// Exercício 02
// a)

const pessoa1 = {
    nome: "Davi",
    idade: 26,
    profissao: "Comerciante"
}

const pessoa2 = {
    nome: "Jarlison",
    idade: 25,
    profissao: "Auxiliar de Produção"
}

// b)

const funcaoDeArrays = (parametro) => {
    arrayDoParametro = [parametro.nome, parametro.nome.length, parametro.idade, parametro.profissao, parametro.profissao.length]
    return arrayDoParametro
}

console.log (funcaoDeArrays (pessoa1))
console.log (funcaoDeArrays (pessoa2))

// Exercício 03
// a)

const carrinho = []

// b)

const fruta1 = {
    nome: "Maçã",
    disponibilidade: Boolean(true)
}


const fruta2 = {
    nome: "Morango",
    disponibilidade: Boolean(true)
}


const fruta3 = {
    nome: "Goiaba",
    disponibilidade: Boolean(true)
}

// c)

const funcaoCarrinho = (frutaDeEntrada) => {
    carrinho.push(frutaDeEntrada)
}

let saidaFuncaoCarrinho = funcaoCarrinho(fruta1)
saidaFuncaoCarrinho = funcaoCarrinho (fruta2)
saidaFuncaoCarrinho = funcaoCarrinho (fruta3)

// d)

console.log (carrinho)

// DESAFIOS

// Desafio 01

const funcaoInformacoesPessoais = () => {
    nomeUsuario = prompt ("Digite seu nome.")
    idadeUsuario = Number(prompt("Digite sua idade."))
    profissaoUsuario = prompt("Digite sua profissão")
    
    const informacoesPessoais = {
        nome: nomeUsuario,
        idade: idadeUsuario,
        profissao: profissaoUsuario
    } 
    
    console.log (informacoesPessoais)
    return typeof informacoesPessoais
}

const saidaNoConsole = funcaoInformacoesPessoais()

console.log (saidaNoConsole)

// Desafio 02

const primeiroFilme = {
    anoDeLancamento: 2016, 
    nome: "Uma Noite em Sampa"
}


const segundoFilme = {
    anoDeLancamento: 2020, 
    nome: "O Oficial e o espião"
}

const funcaoDosFilmes = (objeto1, objeto2) => {
    comparacao1 = objeto1.anoDeLancamento < objeto2.anoDeLancamento
    comparacao2 = objeto1.anoDeLancamento === objeto2.anoDeLancamento

    console.log ("O primeiro filme foi lançado antes do segundo?", comparacao1)
    console.log ("O primeiro filme foi lançado no mesmo ano do segundo?", comparacao2)
    
}

funcaoDosFilmes (primeiroFilme, segundoFilme)

// Desafio 03
const controleEstoque = (frutaDeEntrada1) =>{
    const frutaSaindoDoEstoque = {
        ...frutaDeEntrada1,
        disponibilidade: false,   
    }
    console.log (frutaSaindoDoEstoque)
}
controleEstoque (fruta1)
controleEstoque (fruta2)
controleEstoque (fruta3)


