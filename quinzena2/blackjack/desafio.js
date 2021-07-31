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


    if (confirm ("Quer iniciar uma nova rodada?")) {
       let primeiraCartaUsuario = comprarCarta()
       let segundaCartaUsuario = comprarCarta()
       let primeiraCartaComputador = comprarCarta()
       let segundaCartaComputador = comprarCarta()
    
       let valorCartasUsuario = primeiraCartaUsuario.valor + segundaCartaUsuario.valor
       let valorCartasComputador = primeiraCartaComputador.valor + segundaCartaComputador.valor
    
       console.log (`Usuário - cartas: ${primeiraCartaUsuario.texto} ${segundaCartaUsuario.texto}  - pontuação ${valorCartasUsuario}`)
       console.log (`Computador - cartas: ${primeiraCartaComputador.texto}`)

    
       if ((primeiraCartaUsuario.texto.includes("A") && segundaCartaUsuario.texto.includes("A")) || (primeiraCartaComputador.texto.includes("A") && segundaCartaComputador.texto.includes("A"))){
          console.log("Jogador com Dois 'As'. As cartas serão sorteadas novamente.")


          primeiraCartaUsuario = comprarCarta()
          segundaCartaUsuario = comprarCarta()
          primeiraCartaComputador = comprarCarta()
          segundaCartaComputador = comprarCarta()

          valorCartasUsuario = primeiraCartaUsuario.valor + segundaCartaUsuario.valor
          valorCartasComputador = primeiraCartaComputador.valor + segundaCartaComputador.valor
    
          
          console.log (`Usuário - cartas: ${primeiraCartaUsuario.texto} ${segundaCartaUsuario.texto}  - pontuação ${valorCartasUsuario}`)
          console.log (`Computador - cartas: ${primeiraCartaComputador.texto}`)
              
          if (valorCartasUsuario > valorCartasComputador){
            console.log ("O usuário ganhou!")
         }
          else if (valorCartasUsuario < valorCartasComputador){
            console.log ("O computador ganhou!")
         }
          else {
            console.log ("Empate")
         }
       }

       else {
         if (valorCartasUsuario > valorCartasComputador){
            console.log ("O usuário ganhou!")
         }
         else if (valorCartasUsuario < valorCartasComputador){
            console.log ("O computador ganhou!")
         }
         else {
            console.log ("Empate")
         }
          
       }


       
    }
    else {
       console.log ("O jogo acabou.")
    }