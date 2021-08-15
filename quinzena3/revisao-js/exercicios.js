// EXERCÍCIO 01
function inverteArray(array) {
  
  let arrayInvertido = []
  let i = (array.length - 1)
  let elemento
  for (i; i >= 0; i--) {
    elemento = array[i]
    arrayInvertido.push(elemento)
  }
  
  return arrayInvertido
}
  


// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  const arrayDeNumerosParesAoQuadrado = array.filter ((iten, indice, array) => {
    if (iten % 2 ===0) {
      return iten

    }
  }).map ((iten, indice, array) => {return iten*iten})

  return arrayDeNumerosParesAoQuadrado

}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let arrayDeNumerosPares = []
  for (let num of array) {
    if (num % 2 === 0) {
      arrayDeNumerosPares.push(num)
    }
  }

  return arrayDeNumerosPares
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let numeroMaior = 0
  for (let num of array) {
    if (num > numeroMaior) {
      numeroMaior = num
    }
  }
  return numeroMaior
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  let quantidadeElementos = array.length

  return quantidadeElementos
  
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2 
  const booleano4 = !booleano3 

  let arrayDeBooleanos = [
    booleano1 && booleano2 && !booleano4,
    (booleano1 && booleano2) || !booleano3,
    (booleano2 || booleano3) && (booleano4 || booleano1),
    !(booleano2 && booleano3) || !(booleano1 && booleano3),
    !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
  ]

  return arrayDeBooleanos

}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  let arrayDeNumerosAteN = []
  let numeroDeElementos = arrayDeNumerosAteN.length
  let i = 0
  while (numeroDeElementos < n) {
    arrayDeNumerosAteN.push (i)
    i = i + 2
    numeroDeElementos = arrayDeNumerosAteN.length
  }

  return arrayDeNumerosAteN


}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {

    if (a === b && a === c) {
      return "Equilátero"
    }
    else if ((a===b) || (a===c) || (b===c)) {
      return "Isósceles"
    }
    else if ( (a !== b) && (a !== c) && (b !== c)) {
      return "Escaleno"
    }


}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }

  const comparandoNumeros = {maiorNumero: "" , maiorDivisivelPorMenor:"" , diferenca: "" }

  const numeroMaior = (num1, num2) => {
    if (num1 >= num2) {
      return comparandoNumeros.maiorNumero = num1
    }
    else if (num1 < num2) {
      return comparandoNumeros.maiorNumero = num2
    }
  }
  numeroMaior(num1,num2)

  const saoDivisiveis = (num1, num2) => {
    if (comparandoNumeros.maiorNumero === num1){
      if (num1 % num2 === 0) {
        return comparandoNumeros.maiorDivisivelPorMenor = true
      } else {return comparandoNumeros.maiorDivisivelPorMenor = false}

    }
    else if (comparandoNumeros.maiorNumero === num2) {
      if (num2 % num1 ===0) {
        return comparandoNumeros.maiorDivisivelPorMenor = true
      } else {return comparandoNumeros.maiorDivisivelPorMenor = false}
    }
  }

  saoDivisiveis (num1, num2)

  const diferencaEntreOsNumeros = (num1, num2) => {
    if (num1 >= num2) {
      return comparandoNumeros.diferenca = num1 - num2
    }
    else if (num2 > num1) {
      return comparandoNumeros.diferenca = num2 - num1
    }
  }

  diferencaEntreOsNumeros (num1,num2)


  return comparandoNumeros
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  let arrayMaiorEMenorNumeros = []
  if (array.length > 2) {  
    let numeroMaior = 0
    for (let num of array) {
      if (num > numeroMaior) {
        numeroMaior = num
      }
    }

    let posicaoDoMaiorNumero = array.indexOf(numeroMaior)
    array.splice (posicaoDoMaiorNumero, 1)

    let segundoMaiorNumero = 0
    for (let num2 of array) {
      if (num2 > segundoMaiorNumero) {
        segundoMaiorNumero = num2
      }
    }

    arrayMaiorEMenorNumeros.push (segundoMaiorNumero)

    let menorNumero = 99999999999999999999999999999999999999
    for (let num3 of array) {
      if (num3 < menorNumero) {
        menorNumero = num3
      }
    }

    let posicaoDoMenorNumero = array.indexOf(menorNumero)
    array.splice (posicaoDoMenorNumero,1)

    let segundoMenorNumero = 9999999999999999999999999999999999
    for (let num4 of array) {
      if (num4 < segundoMenorNumero) {
        segundoMenorNumero = num4
      }
    }

    arrayMaiorEMenorNumeros.push (segundoMenorNumero)
}
else if (array.length === 2){
  if (array [0] > array [1]){
    return arrayMaiorEMenorNumeros = [array[1], array[0]]

  }
  else if (array [0] < array [1]) {
    return arrayMaiorEMenorNumeros = [array[0], array[1]]

  }
}
else if (array.length === 1) {
  return arrayMaiorEMenorNumeros = [array[0], array[0]]
}
  

return arrayMaiorEMenorNumeros






}

// EXERCÍCIO 11
function ordenaArray(array) {
  let arrayInvertido = array
  function bubbleSort(array) {
    const tamanhoArray = array.length
    for (let i = 0; i< tamanhoArray; i++) {
      for (let j = 0; j < (tamanhoArray - i - 1); j++) {
        if (array[j] > array[j+1]) {
          let invertePosicao = array[j]
          array[j] = array[j+1]
          array[j+1] = invertePosicao
        }
      }
    }
    
  }
 bubbleSort (arrayInvertido)
 return arrayInvertido 
  
}

// EXERCÍCIO 12
function filmeFavorito() {
  const filmeFavoritoDoAstrodev = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
  }

  return filmeFavoritoDoAstrodev

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."

  const filmeFavoritoDoAstrodev = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", " Anne Hathaway", " Emily Blunt", " Stanley Tucci"]
  }

  return `Venha assistir ao filme ${filmeFavoritoDoAstrodev.nome}, de ${filmeFavoritoDoAstrodev.ano}, dirigido por ${filmeFavoritoDoAstrodev.diretor} e estrelado por ${filmeFavoritoDoAstrodev.atores}.`
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  const informacoesDoRetangulo = {largura: "", altura: "", perimetro: "", area: ""}

  informacoesDoRetangulo.largura = lado1
  informacoesDoRetangulo.altura = lado2
  informacoesDoRetangulo.perimetro =  (2 * (lado1 + lado2))
  informacoesDoRetangulo.area =  (lado1 * lado2)

  return informacoesDoRetangulo

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  const pessoaAnonima = {
    ...pessoa,
    nome: "ANÔNIMO"
  }

  return pessoaAnonima

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
  let arrayDeAdultos = []
  const novoArrayDeAdultos = arrayDePessoas.filter((iten, indice, array) => {
    if (iten.idade >= 18) {
      arrayDeAdultos.push (iten)
    }
  }) 

  return arrayDeAdultos
}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  let arrayDeMenores = []
  const novoArrayDeMenores = arrayDePessoas.filter((iten, indice, array) => {
    if (iten.idade < 18) {
      arrayDeMenores.push(iten)
    }
  })
  
  return arrayDeMenores

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
  const arrayDeEntrada = array
  const arrayMultiplicadoPorDois = arrayDeEntrada.map ((iten, indice, array) => {
    return iten*2})

  
  return arrayMultiplicadoPorDois

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  const arrayDeEntrada = array
  const arrayMultiplicadoPorDoisString = arrayDeEntrada.map ((iten, indice, array) => {
    let string = iten*2
    string = string.toString()
    return string 
  })

  return arrayMultiplicadoPorDoisString
} 

// EXERCÍCIO 17C
function verificaParidade(array) {
  const arrayDeEntrada = array
  const arrayMultiplicadoPorDoisEmString = arrayDeEntrada.map ((iten, indice, array) => {
    
    if (iten % 2 === 0) {
      iten = `${iten} é par`
    } else {
      iten = `${iten} é ímpar`
    }
    return iten 
  })

  return arrayMultiplicadoPorDoisEmString
  

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {
  const pessoasAptasAEntrarNoBrinquedo = pessoas.filter((iten, indice, array) => {
    return iten.altura >=1.5 && iten.idade > 14 && iten.idade < 60
  })

  return pessoasAptasAEntrarNoBrinquedo

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {
  const pessoasInaptasABrincar = pessoas.filter ((iten, indice, array) => {
    return iten.altura < 1.5 || iten.idade <= 14 || iten.idade >= 60
  })

  return pessoasInaptasABrincar

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {


}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {
  let somatorioDasCompras = 0
  const contasAtualizadas = contas.map ((iten, indice, array) => {
    for (let i=0; i < iten.compras.length; i++) {
      somatorioDasCompras = somatorioDasCompras + iten.compras[i]
    }
    iten.saldoTotal = iten.saldoTotal - somatorioDasCompras
    return iten
  })

  return contasAtualizadas


  
  
  
  
}
