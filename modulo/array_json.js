/**********************************************************************
 * Objetivo: Aprender a trabalhar com estrutura de dados Array e JSON
 * Data: 29/09/2023
 * Autor: Guilherme Abel
 * Versão: 1.0
 **********************************************************************/

// [] -> Representa a estrutura array
// {} -> Representa a estrutura JSON

const introducaoArray = function(){
    //Criando um array de forma normal
    let listaDeNomes = ['José', 'Ana', 'Luis', 'Maria', 'Carlos', 'Eduardo']

    //Exibe os dados do array 
    console.log(listaDeNomes);

    //Exibe os dados do array em formato de tabela
    console.table(listaDeNomes);

    //Retorna a quantidade de elementos de um array
    console.log(listaDeNomes.length);

    //Adicionar elementos novos no final da lista
    listaDeNomes.push('Roberto');

    //Adicionar elementos novos no inicio da lista
    listaDeNomes.unshift('Ricardo');

    //Remove o ultimo elemento do array
    listaDeNomes.pop();

    //Revome o primeiro elemento do array
    listaDeNomes.shift();

    //Remove um elemento baseado no índice, podendo definir a quantidade de itens a serem excluídos
    //Exemplo: splice(2,3) -> referente ao índice e 3 é referente a quantidade de itens
    listaDeNomes.splice(2,3);
    console.table(listaDeNomes);

    listaDeNomes.push('André da Silva', 'Ricardo da Silva', 'João da Silva', 10, true)
    console.log(listaDeNomes);

    //typeof: Retorna tipos de dados de um elemento
    console.log(typeof(listaDeNomes[7]));

    console.log(listaDeNomes[2])
}

const percorrendoArray = function(){
    let listaDeProdutos = ['Mouse', 'Teclado', 'Monitor', 'Impressora', 'Mousepad', 'Gabinete', 'Processador', 'HD']

     //while 
    //  let cont = 0;
    //  while(cont < listaDeProdutos.length){
    //     console.log('Nome do Produto: ' + listaDeProdutos[cont]);
    //     cont +=1
    //  }

    //for
    // for(let cont=0; cont < listaDeProdutos.length; cont++){
    //     console.log('Nome do Produto: ' + listaDeProdutos[cont]);
    // }

    //FOREACH
    // listaDeProdutos.forEach(function(produto, indice){
    //     console.log(indice + ' - Nome do Produto: ' + produto);
    // })

    //Retorna o indice do elemento que foi encontrado
    //casso não exista o item buscado retorna -1
    console.log(listaDeProdutos.indexOf('Impressoras'));

    //Retorna verdadeiro ou falso
    console.log(listaDeProdutos.includes('Notebook'))
}

const filtrarProduto = function(nomeProduto){
    let listaDeProdutos = ['Mouse', 'Teclado', 'Monitor', 'Impressora', 'Mousepad', 'Gabinete', 'Processador', 'HD']
    let nome = String(nomeProduto);

    let status = false;
    // return listaDeProdutos.includes(nome);

    listaDeProdutos.forEach(function(produto){
        if(produto.toUpperCase() == nome.toUpperCase())
            status = true;
    })

    return status

}

console.log(filtrarProduto('notebook'));

//introducaoArray();

//percorrendoArray();

//