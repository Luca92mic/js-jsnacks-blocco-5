// 1. Creare un array di oggetti. Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.

var biciclette = [
    {
        nome: 'pippo',
        peso: 3
    },
    {
        nome: 'pluto',
        peso: 2.8
    },
    {
        nome: 'paperino',
        peso: 3.7
    }
];

var peso_minimo = biciclette[0].peso;
var bici_piu_leggera = biciclette[0];

    for (var i = 0; i < biciclette.length; i++) {
        var bici_corrente = biciclette[i];
        var peso_corrente = bici_corrente.peso;
        if(peso_corrente < peso_minimo) {
            peso_minimo = peso_corrente;
            bici_piu_leggera = bici_corrente;
        }
    }

    console.log('Il peso minimo è: '+ peso_minimo);
    console.log('La bici più leggera è: ' + bici_piu_leggera.nome);
    
