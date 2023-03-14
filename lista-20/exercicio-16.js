console.log('Exercício 16:')

var lista = [
    5,4,3,2,1
]

// lista.push(1)
// lista.push(2)
// lista.push(3)
// lista.push(4)
// lista.push(5)

console.log('A lista é:', lista)

var resultado = 0

for (var i = 0; i < lista.length; i++) {
    var element = lista[i];
    console.log(element)

    resultado = resultado + element
}

console.log('O resultado é:', resultado)


