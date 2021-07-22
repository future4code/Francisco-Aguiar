// EXERCÍCIOS DE INTERPRETAÇÃO

// 01

/* As mensagens impressas serão:

a. undefined
b. null
c. 11
d. 3
e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f. 9

*/

// 02

/* Será impresso no console:

SUBI NUM ÔNIBUS EM MIRROCOS 27
*/

// EXERCÍCIOS DE ESCRITA

// 01
const nomeDoUsuario = prompt("Digite seu nome.")
const emailDoUsuario = prompt("Digite seu email.")

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)

// 02

// a)
let comidasFavoritas = ["Lasanha", "Pizza", "Macarronada", "Picanha", "Peixe"]

console.log(comidasFavoritas)

//b)

console.log ("Essas são minhas comidas preferidas:")
console.log (comidasFavoritas[0])
console.log (comidasFavoritas[1])
console.log (comidasFavoritas[2])
console.log (comidasFavoritas[3])
console.log (comidasFavoritas[4]) 

// c)
const comidaDoUsuario = prompt("Qual sua comida favorita?")

comidasFavoritas.splice(1,1,comidaDoUsuario)
console.log(comidasFavoritas)

// 03

const listaDeTarefas = []
const tarefa1 = prompt("Digite uma tarefa a realizar no dia.")
const tarefa2 = prompt("Digite uma segunda tarefa a realizar no dia.")
const tarefa3 = prompt("Digite uma terceira tarefa a realizar no dia.")

listaDeTarefas.push(tarefa1, tarefa2, tarefa3)

console.log(listaDeTarefas)

const indiceDeUmaTarefa = prompt ("Digite o índice de uma tarefa que você já realizou. (De 0 a 2)")

listaDeTarefas.splice(indiceDeUmaTarefa,1)

console.log (listaDeTarefas)

// DESAFIOS

//01
const frase = prompt("Digite uma frase.")
const arrayDaFrase = frase.split(" ", frase.length)

console.log(arrayDaFrase)

// 02

const array = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

console.log (array.indexOf("Abacaxi"), array.length)
