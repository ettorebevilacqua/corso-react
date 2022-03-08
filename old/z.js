// Qui definisco la funzione e parametri che accetta 
function sommaDueNumeri (a, b){
    return a + b;
}

function divideDueNumeri (a, b){
    return a / b;
}

function moltiplicaDueNumeri (a, b){
    return a * b;
}


function calcola(a, b, funionePassata){
    return funionePassata(a, b);
}

const risultato = calcola(3,5, moltiplicaDueNumeri);
console.log('ris', risultato);