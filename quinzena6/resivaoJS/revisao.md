-> Funções em JavaScript

    Uma função em JavaScript é um conjunto de instruções que executa uma tarefa ou calcula um valor.


    A função é definida da seguinte forma:
        function nomeDaFunção (parametro) {
            ação a ser executada
        }

-> Objeto em JavaScript

    Objetos são estruturas de sintaxe que nos permite representar dados mais complexos, de maneira mais organizada, com várias propriedades.

    Sintaxe:
        const nomeDoObjeto = {
            propriedade1: "valor1"
            propriedade2: "valor2"
            .
            .
            .
            propriedadeN: "valorN"
        }

    Para acessar uma propriedade do objeto, utilizamos a notação do ponto:

        nomeDoObjeto.propriedadeN

-> Array

    Arrays são listas de elementos.

    Sintaxe: 
        nomeDoArray = ["elemento1", "elemento2", ... , "elementoN" ]

    Acessamos os elementos do array através da sua posição, lembrando que a posição começa em "Zero":

        nomeDoArray [posição]


-> Map

    É uma propriedade que serve para mapear um array. O novo array criado terá o tamanho do array original.

    Utilizamos quando queremos criar um novo array baseado nas informações de um array inicial.

    Sintaxe: 
        const novoArray = nomeDoArrayInicial.map((iten, index, array) => {
            retorno do novo array
        })


-> Filter

    A propriedade filter serve para filtrar um array inicial. O novo array gerado pode ter o mesmo tamanho ou tamanho menor que o array inicial.

    Utilizamos o método filter quando queremos criar um novo array retirando ou não alguns itens do array original.

    Sintaxe: 
        const novoArray = arrayInicial.filter ((iten, index, array) => {
            retorno do novo array
        })


-> Diferenças entre Map e Filter

    No map, criamos um novo array com o mesmo tamanho do array original.

    No filter, criamos um novo array podendo o novo array ter um tamanho menor que o array inicial.


-> Diferença entre os métodos Push e Pop

    Método Push adiciona um ou mais elementos ao final de um array.

    Método Pop remove o último elemento de um array.

    nomeDoArray.push.("elemento")
    nomeDoArray.pop.()

-> Slice do Array

    O método slice cria um novo array a partir de um array inicial, com elementos entre um intervalo de posições.

    Sintaxe:
        arrayInicial.slice("posicaoInicial", "posicaoinal")


-> Splice do Array

    O método splice remove n elementos a partir de uma posição i do array inicial.

    Sintaxe:

        arrayInicial.splice(i,n)

