/* 
-> Exercícios de Interpretação!

1. Exercício 1

Será impresso:

10
10 5

2. Exercício 2

Será impresso:

10 10 10

3. Exercício 3

p = horasTrabalhadas
t = remuneracaoDiaria

Obs.: Executei os programas para saber se eu tinha acertado as respostas ou não... :D rsrs

*/

// 1

let nome
let idade

console.log (typeof nome)
console.log (typeof idade)

// Foi impresso Undefined devido ainda não ter sido definido um valor para as variáveis.

nome = prompt("Qual seu nome?")
idade = prompt("Qual sua idade?")

console.log (typeof nome)
console.log (typeof idade)

/* O tipo das variáveis mudou, passando a ser agora String (as duas).
Isso ocorreu devido ás variáveis agora estarem com um valor definido, e esses valores são textos.
*/

console.log ("Olá, ",nome,". Você tem", idade, "anos.")

// 2

let perguntas = (prompt("Você é estudante?"), prompt ("Você tem mais de 18 anos?"), prompt ("Você está usando luvas?"))

let resposta1 = "Sim"
let resposta2 = "Sim"
let resposta3 = "Não" 

console.log ("Você é estudante? - ", resposta1)
console.log ("Você tem mais de 18 anos? - ", resposta2)
console.log ("Você está usando luvas? - ", resposta3)

// 3
let a = 10
let b = 25

// Aqui faremos uma lógica para trocar os valores

let c

c = a
a = b
b = c

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

// -> Desafio

let primeiroNumero = prompt("Digite o Primeiro Número.")
let segundoNumero = prompt("Digite o Segundo Número.")

const primeiroNumeroNumber = Number (primeiroNumero)
const segundoNumeroNumber = Number (segundoNumero)

const x = primeiroNumeroNumber + segundoNumeroNumber
const y = primeiroNumeroNumber * segundoNumeroNumber

console.log ("x =", x)
console.log ("y =", y)







