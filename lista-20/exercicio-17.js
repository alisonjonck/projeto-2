console.log('Exercício 17:')

var lista1 = [3,2,3]
var lista2 = [4,5,7,4,5]

exercicio17(lista1, lista2)

exercicio17(lista2, lista1)

function exercicio17(lista1,lista2) {

    var resposta = []

    for (var i = 0; i < lista1.length; i++) {
        var element = lista1[i];

        resposta.push(element)
        
    }

    for (var i = 0; i < lista2.length; i++) {
        var element = lista2[i];

        resposta.push(element)
        
    }

    console.log(resposta)

}