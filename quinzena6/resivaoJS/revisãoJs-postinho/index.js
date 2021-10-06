
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 2));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {
    return `No comparador de igualdade ${a} === ${b} é ${a===b}`
}


console.log (checarIgualdade(3,4))

// c-)Faça uma função chamada "verificaSeEMaior"

function verificaSeEMaior (a,b) {
    return `No comparador de ${a} > ${b} é ${a > b} `
}

console.log(verificaSeEMaior(321, 2156));


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= false
// b-) 1=='1'= false
// c-) 'a'==='b'= false
// d-) 'b'>'a'= false
// e-) 0!==null= true


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------

const cadastro = () => {
    const usuario = []

   
    const nomeDoUsuario= prompt("Digite seu nome")
    const anoDeNascimento= Number(prompt("Digite o ano de nascimento"))
    const senhaDoUsuario = prompt("Digite sua senha de usuário. (Mínimo 6 caracteres)")
    const nacionalidade = prompt("Digite sua nacionalidade")

   
    if ((2021 - anoDeNascimento >= 18 ) && (senhaDoUsuario.length >= 6) && ( (nacionalidade.toUpperCase = 'BRASILEIRA') || (nacionalidade.toUpperCase = 'BRASILEIRO') ) ) {
        usuario.push(nomeDoUsuario, anoDeNascimento, senhaDoUsuario, nacionalidade)

        return usuario

    } else {return "Você não está apto a se cadastrar."}

    
}
console.log(cadastro());

// Exercício 4-----------------------------------------------------------------------------------------------

const login = () => {
    const login = "labenu"
    const senha = prompt("Digite sua senha")

    if (senha === login) {
        console.log ("Usuário Logado")
    } else {
        console.log ("Senha Inválida")
    }

}

console.log(login());

// Exercício 5----------------------------------------------------------------------------------------------------

const primeiraDose = () => {

    const seuNome = prompt ("Digite seu nome.")
    const vacina = prompt ("Digite o nome da vacina que você tomou.")
    let tempo = "" 
    let data = ""

    if (vacina.toLowerCase = "coronavac") {
        tempo = 28
        data = "18/10/2021"

        console.log(`Olá ${seuNome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`)
    }
    else if (vacina.toLowerCase = "astrazenica") {
        tempo = 90
        data = "20/12/2021"

        console.log(`Olá ${seuNome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`)
    }
    else if (vacina.toLowerCase = "pfizer") {
        tempo = 90
        data = "20/12/2021"

        console.log(`Olá ${seuNome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`)
    }

}
console.log(primeiraDose())


// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    const usuariosAtualizados = usuarios.map ((iten, index, array) => {
        if (iten.nome === nomeDoUsuario) {
            iten.imunizacao = "completa"

            return iten
        } else {return iten}

        
    })



    return usuariosAtualizados
}
console.log(segundaDose("Barbara"));

// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    const listaDeUsuariosParaVoltarAoPosto = usuarios.filter((iten) => {
        if (iten.imunizacao === "incompleta") {
            console.log (`Olá ${iten.nome}! Sua imunização está ${iten.imunizacao}, por favor volte ao postinho para tomar a segunda dose.`)
        }
    })

    return listaDeUsuariosParaVoltarAoPosto

}
console.log(avisoAosAtrasados());


// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

// const cadastro = () => {
    //  Sua lógica aqui
// }
// console.log(cadastro());

// const login = () => {
    //  Sua lógica aqui
// }
// console.log(login());

// const primeiraDose = () => {
//  Sua lógica aqui
// }
// console.log(primeiraDose())
// const segundaDose = (nomeDoUsuario) => {
    //  Sua lógica aqui
// }
// console.log(segundaDose("ALGUM NOME AQUI"));

// const avisoAosAtrasados = () => {
    //  Sua lógica aqui
// }
// console.log(avisoAosAtrasados());