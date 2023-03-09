var palavroesQueNaoPodemSerDitos = [
    'filha da puta',
    'filha do capiroto',
]

var textosExemplos = [
    'filha da puta',
    'filha da mãe',
    'filha do pai',
    'filha do capiroto',
    'essa é uma mensagem feliz',
]

for (var n1 = 0; n1 < textosExemplos.length; n1++) {
    var texto_da_vez = textosExemplos[n1];

    var usuario_falou_um_palavrao = false

    for (var n2 = 0; n2 < palavroesQueNaoPodemSerDitos.length; n2++) {
        // aqui é o segundo FOR
        var palavrao_da_vez = palavroesQueNaoPodemSerDitos[n2];

        if (palavrao_da_vez === texto_da_vez) {
            usuario_falou_um_palavrao = true
        }
    }

    if (usuario_falou_um_palavrao) {
        console.log('Hey, vai lavar a boca com sabão!');
    } else {
        console.log('Sua mensagem foi salva com sucesso!')
    }
    
}


