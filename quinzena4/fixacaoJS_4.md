function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let contador = 0
  let resultado
  for (let i of arrayDeNumeros) {
    if (i===numeroEscolhido){
      contador= contador + 1
    }
  }
  
  if (contador === 0){ 
    resultado = "Número não encontrado"
  } else if (contador > 0){
    resultado = `O número ${numeroEscolhido} aparece ${contador}x`
  }
  
  return resultado
}