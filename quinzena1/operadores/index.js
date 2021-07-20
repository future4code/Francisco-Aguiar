// EXERCÍCIOS DE INTERPRETAÇÃO

// Exercício 01

/* Será impresso no console da seguinte forma:

a. False
b. false
c. true
d. Boolean

*/

// Exercício 02

/*  O problema está na hora de realizar a operação
matemática. Pois está somando-se duas strings. 
Para o código dar certo, teria que converter as variáveis
"peimeiroNumero" e "segundoNumero" em number, atravé do
comando Number().

Será impresso uma mensagem de erro.

(Poxa, errei na mensagem que seria impresso, quando
    executei o código, imprimiu a junção dos dois números
    digitados no prompt, um seguido do outro.)

*/

// Exercício 03

/* Faria a alteração na escrita do código da variável soma, passando a ser escrito da seguinte forma:

const soma = Number(primeiroNumero) + Number(segundoNumero)

*/

// EXERCÍCIOS DE ESCRITA

// Exercício 01

const idadeUsuario = Number(prompt ("Digite a sua idade."))
const idadeAmigo = Number(prompt ("Digite a idade do seu/sua melhor amigo(a)."))

console.log ("Sua idade é maior do que a do seu melhor amigo?", idadeUsuario > idadeAmigo)
console.log ("Diferença de idade=", idadeUsuario - idadeAmigo)


// Exercício 02

const numeroPar = Number(prompt("Insira um número par."))

console.log ("Resto da divisão por 2 =", numeroPar % 2)
// O resto da divisão de um número par por 2 é sempre = 0
// Se for um número ímpar, o resto da divisão dará sempre um número diferente de 0


//Exercício 03

const idadeEmAnos = Number(prompt("Digite sua idade em anos."))

console.log ("Idade em Meses =", idadeEmAnos * 12)
console.log ("Idade em Dias =", idadeEmAnos * 12 * 30)
console.log ("Idade em Horas =", idadeEmAnos * 12 * 30 * 24)


// Exercício 04

const num01 = Number(prompt("Digite um número."))
const num02 = Number(prompt("Digite outro número."))

console.log (num01, num02)
console.log ("O primeiro numero é maior que segundo?", num01 > num02)
console.log ("O primeiro numero é igual ao segundo?", num01 === num02)
console.log ("O primeiro numero é divisível pelo segundo?", num01 % num02 === 0)
console.log ("O segundo numero é divisível pelo primeiro?", num02 % num01 === 0)


// DESAFIO

//01

// a)

let grauF = 77

let formulaFarenParaKelvin = ((grauF - 32)*(5/9)) + 273.15

console.log (grauF + "°F", "em K =", formulaFarenParaKelvin + "K")

// b)

let grauC = 80

let formulaCelsiuParaFaren = (grauC*(9/5)) + 32

console.log (grauC + "°C", "em °F =", formulaCelsiuParaFaren + "°F")

// c)

grauC = 30
formulaCelsiuParaFaren = (grauC*(9/5)) + 32

grauF = formulaCelsiuParaFaren

formulaFarenParaKelvin = ((grauF - 32)*(5/9)) + 273.15

console.log (grauC + "°C", "em °F e K =", grauF + "°F", "e", formulaFarenParaKelvin + "K")

// d)

grauC = Number(prompt ("Digite uma Temperatura em Grau Celsius."))
formulaCelsiuParaFaren = (grauC*(9/5)) + 32

grauF = formulaCelsiuParaFaren

formulaFarenParaKelvin = ((grauF - 32)*(5/9)) + 273.15

console.log (grauC + "°C", "em °F e K =", grauF + "°F", "e", formulaFarenParaKelvin + "K")

//02

let kwhConsumido

// a)
kwhConsumido = 280

console.log ("280 Kwh Consumidos. Valor a ser pago =", "R$" + kwhConsumido*0.05)

// b)

let desconto
desconto = 15/100

console.log ("280 Kwh Consumidos. Valor a ser pago com 15% de desconto =", "R$" + (kwhConsumido*0.05 - kwhConsumido*0.05*desconto))

//03

// a)

let libra = 20
let libraEmQuilograma = libra / 2.2046

console.log ("20lb equivalem a", libraEmQuilograma, "kg")

// b) 


let oncaOz = 10.5
let oncaEmQuilograma = oncaOz / 35.274

console.log ("10.5oz equivalem", oncaEmQuilograma, "kg")

// c)
let milha = 100
let milhaEmMetro = milha / 0.00062137

console.log ("100mi equivalem", milhaEmMetro, "m")

// d)

let pes = 50
let pesEmMetro = pes / 3.2808

console.log ("50ft equivalem", pesEmMetro, "m")

// e)

// f)

// g)

milha = Number(prompt("Digite um número na unidade milha."))
milhaEmMetro = milha / 0.00062137

console.log (milha + "mi equivalem", milhaEmMetro, "m")






