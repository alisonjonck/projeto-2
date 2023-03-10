console.log('# Exercício 15:')

function verNumeroPositivoNegativoOuZero(numero) {
    if (numero == 0) {
        console.log('É ZERO')
    } else if (numero > 0) {
        console.log(numero, 'É POSITIVO')
    } else {
        console.log(numero, 'É NEGATIVO')
    } 
}

verNumeroPositivoNegativoOuZero(1)
verNumeroPositivoNegativoOuZero(-1)
verNumeroPositivoNegativoOuZero(0)


