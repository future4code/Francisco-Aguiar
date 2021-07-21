// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  const alturaRet = prompt("Digite a altura do Retângulo.")
  const larguraRet = prompt("Digite a largura do Retângulo.")

  console.log (Number(alturaRet) * Number(larguraRet))


}

// Exercício 2
function imprimeIdade() {
  const anoAtual = prompt("Digite qual o ano em que estamos.")
  const anoNascimento = prompt("Digite o ano em que você nasceu.")

  console.log (Number(anoAtual) - Number(anoNascimento))

}

// Exercício 3
function calculaIMC() {
  const pesoPessoa = prompt("Digite seu peso em kg.")
  const alturaPessoa = prompt("Digite sua altura em metros.")
  
  console.log (Number(pesoPessoa) / (Number(alturaPessoa)*Number(alturaPessoa)))

}

// Exercício 4
function imprimeInformacoesUsuario() {
  const nomePessoa = prompt("Qual seu nome?")
  const idadePessoa = prompt("Qual sua idade?")
  const emailPessoa = prompt("Qual seu email?")

  console.log ("Meu nome é " + nomePessoa + ", tenho " + idadePessoa + " anos, e o meu email é " + emailPessoa + ".")

}

// Exercício 5
function imprimeTresCoresFavoritas() {
  const corFavorita1 = prompt("Digite sua primeira cor favorita.")
  const corFavorita2 = prompt("Digite sua segunda cor favorita.")
  const corFavorita3 = prompt("Digite sua terceira cor favorita.")

  const array = [corFavorita1,corFavorita2,corFavorita3]
  console.log (array)


}

// Exercício 6
function retornaStringEmMaiuscula() {
  const palavra = prompt("Digite uma palavra.")
  
  console.log (palavra.toUpperCase())


}

// Exercício 7
function calculaIngressosEspetaculo() {
  const custoEspetaculo = prompt("Quanto custa o Espetáculo de Teatro?")
  const valorIngresso = prompt("Qual o valor cobrado pelo ingresso?")
    
  console.log (Number(custoEspetaculo) / Number(valorIngresso))
  

}

// Exercício 8
function checaStringsMesmoTamanho() {
  // const stringOne = prompt ("Digite uma palavra.")
  // const stringTwo = prompt ("Digite outra palavra.")

  // if (stringOne.length == stringTwo.length)
  //   console.log (Boolean(true))

  //   else console.log (Boolean(false))

  // O código acima eu havia feito antes de assitir a aula de comparadores. Havia pesquisado no google, me deparei com o "if" e o "else", me obriguei a entender antes da aula para resolver o exercicio rsrsrsrs.


const stringOne = prompt("Digite uma palavra.")
const stringTwo = prompt("Digite outra palavra.")

console.log (stringOne.length === stringTwo.length)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // const primeiraPalavra = prompt("Digite uma palavra.")
  // const segundaPalavra = prompt("Digite outra palavra.")
  
  // if (primeiraPalavra.toUpperCase().includes(segundaPalavra.toUpperCase()))
  //   console.log (Boolean(true))

  //   else console.log (false)
  
  // O código acima foi o que fiz antes de assistir a aula, através de pesquisas no Google.

  let primeiraPalavra = prompt("Digite uma palavra.")
  let segundaPalavra = prompt("Digite outra palavra.")
  
  primeiraPalavra = primeiraPalavra.toUpperCase()
  segundaPalavra = segundaPalavra.toUpperCase()

  console.log (segundaPalavra.includes(primeiraPalavra))
}

// Exercício 10
function checaRenovacaoRG() {
  // const currentYear = prompt("Em que ano estamos?")
  // const bornYear = prompt ("Em que ano você nasceu?")
  // const idYear = prompt ("Em qual ano sua identidade foi emitida?")

  // const idadeAtual = Number(currentYear) - Number(bornYear)
  // const tempoEmissao = Number(currentYear) - Number(idYear)

  // if (idadeAtual <= 20 && tempoEmissao / 5 >= 1)
  //   console.log(Boolean(true))

  // else if (20 < idadeAtual && idadeAtual <= 50 && tempoEmissao / 10 >= 1)
  //      console.log(Boolean(true)) 

  // else if (idadeAtual > 50 && tempoEmissao / 15 > 1)
  //       console.log (Boolean(true)) 

  // else console.log(Boolean(false))

  // Havia feito o código acima antes da aula, através de pesquisas no google.

  const currentYear = Number(prompt("Em que ano estamos?"))
  const bornYear = Number(prompt ("Em que ano você nasceu?"))
  const idYear = Number(prompt ("Em qual ano sua identidade foi emitida?"))

  const idadeAtual = currentYear - bornYear
  const tempoEmissao = currentYear - idYear

  console.log ((idadeAtual <= 20 && tempoEmissao / 5 >= 1) || (idadeAtual > 20 && idadeAtual <= 50 && tempoEmissao / 10 >= 1) || (idadeAtual > 50 && tempoEmissao / 15 > 1))

}

// Exercício 11
function checaAnoBissexto() {
  // const year = prompt("Digite um ano.")
  
  // if (year % 400 === 0)
  //   console.log (Boolean(true))
  
  // else if (year % 4 === 0)
  //    if (year % 100 ===0 && year % 400 != 0)
  //     console.log (Boolean(false))
  //     else console.log(Boolean(true)) 

  // else console.log (Boolean(false))  
  
  // Havia feito o código acima antes da aula, através de pesquisas no google.

  const year = Number(prompt("Digite um ano."))

  const condicao1 = year % 400 === 0
  const condicao2 = (year % 4 === 0) 
  const condicaoExcecao = year % 4 === 0 && year % 100 ===0 && year % 400 != 0

  console.log (condicao1 || (condicao2 && !condicaoExcecao))
  


}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // const suaIdade = prompt("Você tem mais de 18 anos?")
  // const escolaridade = prompt("Você possui ensino médio completo?")
  // const horasLivres = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")


  // if (suaIdade === "sim" && escolaridade === "sim" && horasLivres === "sim")
  //   console.log (Boolean(true))

  //   else console.log(Boolean(false))

  // Havia feito o código acima antes da aula, através de pesquisas no google.

  const suaIdade = prompt("Você tem mais de 18 anos?")
  const escolaridade = prompt("Você possui ensino médio completo?")
  const horasLivres = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

  console.log (suaIdade.toLowerCase() === "sim" && escolaridade.toLowerCase() === "sim" && horasLivres.toLowerCase() === "sim")
}