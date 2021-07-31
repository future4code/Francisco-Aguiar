/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    console.log ("Bem vindo(a) ao jogo de Blackjack!")
    let primeiraCartaUsuario = comprarCarta()
    let segundaCartaUsuario = comprarCarta()
    let primeiraCartaComputador = comprarCarta()
    let segundaCartaComputador = comprarCarta()
   
    let cartasDoUsuario = [primeiraCartaUsuario, segundaCartaUsuario]
    let cartasDoComputador = [primeiraCartaComputador, segundaCartaComputador]

    let valorCartasUsuario = primeiraCartaUsuario.valor + segundaCartaUsuario.valor
    let valorCartasComputador = primeiraCartaComputador.valor + segundaCartaComputador.valor

      
    const resultado = (valorUsuario, valorComputador) => {
      if (valorUsuario > valorComputador){
         console.log ("O usuário ganhou!")
      }
      else if (valorUsuario < valorComputador){
         console.log ("O computador ganhou!")
      }
      else {
         console.log ("Empate")
      }
    }

    const comprarNovaCarta = () => {
      const novaCarta = comprarCarta() 
      return novaCarta
    }

    if (confirm ("Quer iniciar uma nova rodada?")) {
      console.log (`Usuário - cartas: ${primeiraCartaUsuario.texto} ${segundaCartaUsuario.texto}  - pontuação ${valorCartasUsuario}`)
      console.log (`Computador - cartas: ${primeiraCartaComputador.texto}`)

      while ((primeiraCartaUsuario.texto.includes("A") && segundaCartaUsuario.texto.includes("A")) || (primeiraCartaComputador.texto.includes("A") && segundaCartaComputador.texto.includes("A"))) {
         console.log ("Duas cartas 'As' para o mesmo jogador. As cartas serão redistribuidas.");
         primeiraCartaUsuario = comprarCarta()
         segundaCartaUsuario = comprarCarta()
         primeiraCartaComputador = comprarCarta()
         segundaCartaComputador = comprarCarta()
      
         cartasDoUsuario = [primeiraCartaUsuario, segundaCartaUsuario]
         cartasDoComputador = [primeiraCartaComputador, segundaCartaComputador]
  
         valorCartasUsuario = primeiraCartaUsuario.valor + segundaCartaUsuario.valor
         valorCartasComputador = primeiraCartaComputador.valor + segundaCartaComputador.valor

         console.log (`Usuário - cartas: ${primeiraCartaUsuario.texto} ${segundaCartaUsuario.texto}  - pontuação ${valorCartasUsuario}`);
         console.log (`Computador - cartas: ${primeiraCartaComputador.texto}`);

      }

      const querMaisCartas = confirm(`Suas cartas são ${primeiraCartaUsuario.texto} ${segundaCartaUsuario.texto}. A carta revelada do computador é ${primeiraCartaComputador.texto}. \n Deseja comprar mais uma carta?`)
      // for (; querMaisCartas === true ; )



      resultado(valorCartasUsuario, valorCartasComputador)
     
   
    }

    else {
      console.log ("O jogo acabou.")
    }

