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
   
    let cartasDoUsuario = [primeiraCartaUsuario.texto, segundaCartaUsuario.texto]
    let cartasDoComputador = [primeiraCartaComputador.texto, segundaCartaComputador.texto]

    let valorCartasUsuario = primeiraCartaUsuario.valor + segundaCartaUsuario.valor
    let valorCartasComputador = primeiraCartaComputador.valor + segundaCartaComputador.valor


      
    const resultado = (valorUsuario, valorComputador) => {
      if (valorUsuario > 21){
         console.log ("O computador ganhou!")
      }
      else if (valorComputador > 21 && valorUsuario <= 21){
         console.log ("O usuário ganhou!")
      }
      else if (valorComputador === valorUsuario) {
         console.log ("Empate")
      }
      
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
      
         cartasDoUsuario = [primeiraCartaUsuario.texto, segundaCartaUsuario.texto]
         cartasDoComputador = [primeiraCartaComputador.texto, segundaCartaComputador.texto]
  
         valorCartasUsuario = primeiraCartaUsuario.valor + segundaCartaUsuario.valor
         valorCartasComputador = primeiraCartaComputador.valor + segundaCartaComputador.valor

     
         console.log (`Usuário - cartas: ${primeiraCartaUsuario.texto} ${segundaCartaUsuario.texto}  - pontuação ${valorCartasUsuario}`);
         console.log (`Computador - cartas: ${primeiraCartaComputador.texto}`);

      }

      const querMaisCartas = confirm(`Suas cartas são ${cartasDoUsuario}. A carta revelada do computador é ${primeiraCartaComputador.texto}. \n Deseja comprar mais uma carta?`)
   
      

      while (querMaisCartas === true) {
         let novaCartaComprada = comprarCarta()
         valorCartasUsuario = valorCartasUsuario + novaCartaComprada.valor
         cartasDoUsuario.push(novaCartaComprada.texto)

         

         if (valorCartasUsuario <= 21) {
            const pergunta = confirm(`Suas cartas são ${cartasDoUsuario}. A carta revelada do computador é ${primeiraCartaComputador.texto}. \n Deseja comprar mais uma carta?`)
            if (pergunta === false) {
               break
            }
   
         }
         else if (valorCartasUsuario > 21) {
            alert (`Suas cartas são ${cartasDoUsuario}. Sua pontuação é ${valorCartasUsuario}. \n As cartas do computador são ${cartasDoComputador}. A pontuação do computador é ${valorCartasComputador}. \n O computador ganhou!`)

            console.log (`Suas cartas são ${cartasDoUsuario}. Sua pontuação é ${valorCartasUsuario}. \n As cartas do computador são ${cartasDoComputador}. A pontuação do computador é ${valorCartasComputador}. \n O computador ganhou!`)
            break
       

            
         }

      }
   

      if (valorCartasUsuario <= 21) {
         while (valorCartasComputador < valorCartasUsuario) {
            let novaCartaComputador = comprarCarta()
            valorCartasComputador = valorCartasComputador + novaCartaComputador.valor
            cartasDoComputador.push(novaCartaComputador.texto)


            if (valorCartasComputador > 21) {
               console.log (`Suas cartas são ${cartasDoUsuario}. Sua pontuação é ${valorCartasUsuario}. \n As cartas do computador são ${cartasDoComputador}. A pontuação do computador é ${valorCartasComputador}. \n O usuário ganhou!`)
            }
            

         }
         if (valorCartasUsuario === valorCartasComputador){
            console.log (`Suas cartas são ${cartasDoUsuario}. Sua pontuação é ${valorCartasUsuario}. \n As cartas do computador são ${cartasDoComputador}. A pontuação do computador é ${valorCartasComputador}. \n O jogo terminou empatado!`)
            
         }
         if (valorCartasComputador > valorCartasUsuario) {
            console.log (`Suas cartas são ${cartasDoUsuario}. Sua pontuação é ${valorCartasUsuario}. \n As cartas do computador são ${cartasDoComputador}. A pontuação do computador é ${valorCartasComputador}. \n O computador venceu.`)
            

         }
      }
         
      }

      


   
   
    else {
      console.log ("O jogo acabou.")
    }

