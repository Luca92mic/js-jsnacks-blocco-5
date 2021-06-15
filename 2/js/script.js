// 3. Crea un array di 10 oggetti che rappresentano una zucchina. Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine

var maxPezzi = 10
var pezzoPiccolo = 15;
var cassetta = [];
var pezziPiccoli = [],
pezziGrandi = [];

    creaCassetta();
    console.log("cassetta", cassetta);

    dividiCassetta();
    console.log("pezziPiccoli:", pezziPiccoli);
    console.log("pezziGrandi:", pezziGrandi);

    var pesoPezziPiccoli = pesoTotale(pezziPiccoli);
    var pesoPezziGrandi = pesoTotale(pezziGrandi);

    console.log("Peso zucchine piccole:", pesoPezziPiccoli, "gr.");
    console.log("Peso zucchine grandi:", pesoPezziGrandi, "gr.");

    function creaCassetta() {

        for (var i = 0; i < maxPezzi; i++) {

            var varieta = "z-" + numeroRandom(10, 99);
            var lunghezza = numeroRandom(5, 30);
            var peso = numeroRandom(100, 1500);

            var zucchina = {
                'tipo': varieta,
                'lunghezza': lunghezza,
                'peso': peso
            };

            cassetta[i] = zucchina;
        }
    }

    function dividiCassetta() {
        for (var i = 0; i < cassetta.length; i++) {

            if (cassetta[i].lunghezza <= pezzoPiccolo) {
                pezziPiccoli.push(cassetta[i]);
            } else {
                pezziGrandi.push(cassetta[i]);
            }
        }
    }

    function pesoTotale(cassettina) {
        var pesoTotale = 0;
        for (var i = 0; i < cassettina.length; i++) {
            pesoTotale += cassettina[i].peso;
        }
        return pesoTotale;
    }

    function numeroRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }