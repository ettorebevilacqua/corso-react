function aggiungiAlTotale (a, b){
    return a + b;
}

let lista =[1,2, 7, 5];
let len = lista.length;

let accumulatore = 0;
for ( i = 0; i < len; i++) {
    const numero = lista[i];
    accumulatore = accumulatore + numero;

    // accumulatore = chiamaLaFunzioneCheGliDiceCOsaDeveFare(accumulatore, numero);
    // accumulatore = aggiungiAlTotale(accumulatoere, numero);
}


console.log('totale', accumulatore);


let lista2 = [4, 5, 6, 7, 7];

function somma(lista){
    let len = lista.length;
    let accumulatore = 0;
    // primo valore indice 0  
    // numero di valori 1 su un array con un solo elemento

    for(let i=0; i < len; i++){
        const numero = lista[i];
        accumulatore += numero ;
    }
    return accumulatore;
}

let lista2 = [4, 5, 6, 7, 7];
let lista3 = [4, 4, 5, 3, 7];
let lista4 = [4, 2, 3, 4, 7];
let lista5 = [4, 4, 5, 3, 2];

let totale2 = somma(lista2);
let totale3 = somma(lista3);
let totale4 = somma(lista4);
let totale5 = somma(lista5);

// parametri
// argomenti

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

// applica un operatore a 2 valori 
// applicamo un operatore a 2 valori 

function calcola(a, b, funionePassata){
    return funionePassata(a, b);
   /* if (operatore === '+' ){
        return a + b;
    } else if (operatore === '*' ){
        return a * b;
    } else if (operatore === '/' ){
        return a / b;
    }
    
    return a - b; */
}

// quando chiamo la funzione passo degli argomenti, valori concreti
sommaDueNumeri(2, 4);
sommaDueNumeri(2, 5);
sommaDueNumeri(4, 4);
dividiDueNumeri(40, 6);
moltiplicaDueNumeri();

calcola(4,5, '+');
calcola(4,5, '-');

function isMaggiore(a, b ){
    return a > b;
}

function isMinore(a, b ){
    return a < b;
}

function isUguale(a, b ){
    return a === b;
}


calcola(4,5, isMinore );

maggiore= isMaggiore(4, 5);






/*
function miaMedia(lista, chiamaLaFunzioneCheGliDiceCOsaDeveFare) {
    // media =  sommaValori / numeriDeiElementi 
    let accumulatore = 0;
    const len = lista.length;

    function aggiungiAlTotale (a, b){
        return a + b;
    }

    for (let i = 0; i < len; i++) {
        const numero = lista[i];
        // accumulatore = totale + numero;

        // accumulatore = chiamaLaFunzioneCheGliDiceCOsaDeveFare(accumulatore, numero);
        accumulatore = aggiungiAlTotale(accumulatoere, numero);
    }

    return accumulatore / len;
}

function aggiungiAlTotale (a, b){
    return a + b;
}

// const tot = aggiungiAlTotale(6,3);

const lista = [2,4,5,2,6];

const calcoloPassato = miaMedia(lista, aggiungiAlTotale);

console.log('clalcolo passato', calcoloPassato);


/*
const lista1 = [2, 4.6, 2, 3];
const totale1 = lista.reduce((acc, val) => acc + val);
const media1 = totale / lista.length;

const lista2 = [2, 4.6, 2, 3];
const totale2 = lista.reduce((acc, val) => acc + val, 0);
const media2 = totale / lista.length;


*/