console.log('Exercício 18:')

// var usuarioLogado = {
//     nome: 'Pedro',
//     idade: 22,
//     masculino: true
// }

function exercicio18(obj) {
    console.log('')
    console.log('O nome é:', obj.nome)
    console.log('A idade é:', obj.idade)

    if (obj.masculino) {
        console.log('É homem')
    } else {
        console.log('É mulher')
    }

}


exercicio18({
    nome: 'Maria',
    idade: 21,
    masculino: false
})

exercicio18({
    nome: 'João',
    idade: 22,
    masculino: true
})


