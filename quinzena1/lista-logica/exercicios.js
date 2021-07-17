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
  let alturaRet = prompt("Digite a altura do Retângulo.")
  let larguraRet = prompt("Digite a largura do Retângulo.")

  console.log (Number(alturaRet) * Number(larguraRet))


}

// Exercício 2
function imprimeIdade() {
  let anoAtual = prompt("Digite qual o ano em que estamos.")
  let anoNascimento = prompt("Digite o ano em que você nasceu.")

  console.log (Number(anoAtual) - Number(anoNascimento))

}

// Exercício 3
function calculaIMC() {
  let pesoPessoa = prompt("Digite seu peso em kg.")
  let alturaPessoa = prompt("Digite sua altura em metros.")
  
  console.log (Number(pesoPessoa) / (Number(alturaPessoa)*Number(alturaPessoa)))

}

// Exercício 4
function imprimeInformacoesUsuario() {
  let nomePessoa = prompt("Qual seu nome?")
  let idadePessoa = prompt("Qual sua idade?")
  let emailPessoa = prompt("Qual seu email?")

  console.log ("Meu nome é " + nomePessoa + ", tenho " + idadePessoa + " anos, e o meu email é " + emailPessoa + ".")

}

// Exercício 5
function imprimeTresCoresFavoritas() {
  let corFavorita1 = prompt("Digite sua primeira cor favorita.")
  let corFavorita2 = prompt("Digite sua segunda cor favorita.")
  let corFavorita3 = prompt("Digite sua terceira cor favorita.")

  console.log (new Array (corFavorita1, corFavorita2, corFavorita3))


}

// Exercício 6
function retornaStringEmMaiuscula() {
  let palavra = prompt("Digite uma palavra.")
  
  console.log (palavra.toUpperCase())


}

// Exercício 7
function calculaIngressosEspetaculo() {
  let custoEspetaculo = prompt("Quanto custa o Espetáculo de Teatro?")
  let valorIngresso = prompt("Qual o valor cobrado pelo ingresso?")
    
  console.log (Number(custoEspetaculo) / Number(valorIngresso))
  

}

// Exercício 8
function checaStringsMesmoTamanho() {
  let stringOne = prompt ("Digite uma palavra.")
  let stringTwo = prompt ("Digite outra palavra.")

  if (stringOne.length == stringTwo.length)
    console.log (Boolean(true))

    else console.log (Boolean(false))



}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  let primeiraPalavra = prompt("Digite uma palavra.")
  let segundaPalavra = prompt("Digite outra palavra.")
  
  if (primeiraPalavra.toUpperCase().includes(segundaPalavra.toUpperCase))
    console.log (Boolean(true))

    else console.log (false)
}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
}