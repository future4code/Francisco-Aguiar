// EXERCICIOS DE INTERPRETACAO

// Exercício 01
// Não será impresso nada, pois a função não foi invocada.

// :@ noossaaa, essa eu errei feio :((


// Exercício 02
// Será impresso no console:
// ["Amanda Rangel", "Laís Petra", "Letícia Chijo"]


// Exercício 03
// ["Mandi", "Laura"]

// Poxaaa, errei novamente... era o objeto completo que seria retornado :(((((((( :@@@



// EXERCÍCIOS DE ESCRITA    

// Exercício 01

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 // a)

 const nomeDosDoguinho = pets.map((iten, index, array) =>{
     return iten.nome
 })

 console.log (nomeDosDoguinho)

 // b)

 const cachorrosSalsichas = pets.filter ((iten, index, array) => {
     return iten.raca === "Salsicha"
 })

 console.log (cachorrosSalsichas)

 // c)

 const arrayDeMensagens = pets.filter((iten, index, array) => {return iten.raca === "Poodle"}).map((iten,index,array) => {return (`Você ganhou um cupom de desconto de 10% para tosar o/a ${iten.nome}`)})

 console.log (arrayDeMensagens)


 // Exercício 02

 const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 // a)

 const arrayDeNomes = produtos.map ((iten, index, array) => {
     return iten.nome
 })

 console.log (arrayDeNomes)

 // b)

 const arrayDeNomeEPrecoComDesconto = produtos.map ((iten, index, array) => {
     let novoObjeto = {nome : iten.nome, preco: (iten.preco - ((10/100)*iten.preco))}
     return novoObjeto

 })

 console.log (arrayDeNomeEPrecoComDesconto)

 // c)

 const arrayDasBebidas = produtos.filter((iten, index, array) => {
     return iten.categoria === "Bebidas"
 })

 console.log (arrayDasBebidas)

 // d)

 const arrayDeYpes = produtos.filter ((iten, index, array) => {return iten.nome.includes("Ypê")})

 console.log (arrayDeYpes)

 // e) 

 const arrayDeNomesEPrecosYpes = produtos.filter((iten, index, array) => {return iten.nome.includes("Ypê")}).map((iten, index, array) => {return `Compre ${iten.nome} por ${iten.preco}`})
 
 console.log (arrayDeNomesEPrecosYpes)

 