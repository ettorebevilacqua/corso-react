
/** 
 Le funzioni permettono di eseguire un blocco di codice.
 le funzioni normalemente si dichiarano per essere chiamate più volte
 le funzioni possono accettare dei parametri
 i paramentri vengono dichiariti dentro le parentesi della dichiarazione della funzione
 i parametri passati prendono un nome a piacimento.
 quando chiamo la funzione passo dei valori come parametri.

*/// ALT 96 o alt + shift + ù


// **************************** 

function ciclaLista(funzDaPassare, listaPassata){
   //  console.log(`sono dentro a somma, listaPassata= ${listaPassata} `);
    let accumulatore = 0;

    // caro for ciclami listaPassata e chiama funzDaPassare, con risultato sul accumulatore
    for(let i=0; i<listaPassata.length; i++){
        // qui chiamo La funzione passata per fare il calcolo
        accumulatore = funzDaPassare(listaPassata[i], accumulatore, i );
        // console.log(`sono dentro al for valore valore i=${i} acc=${accumulatore} `);
    }

    return accumulatore;
}

// Qui sotto chiamo la stessa funzione più volte passando parametri diversi.

function somma(valore, accumulatore, i ){
    return accumulatore + valore
}

const moltiplica = (a, b) => a * b;
const dividi = (a, b) => a / b;
const algebra = (a, b) => (a * a) + (b * b);

const risultato = ciclaLista( somma, [1,2,3] );
console.log('sono dopo la chiamata alla funzione risultato=', risultato);

const risultato2 = ciclaLista( moltiplica, [1,2,3] );
console.log('sono dopo la chiamata alla funzione risultato=', risultato2);

const risultato3 = ciclaLista( dividi, [1,2,3] );
console.log('sono dopo la chiamata alla funzione risultato=', risultato3);


const risultato4 = ciclaLista( algebra, [1,2,3] );
console.log('sono dopo la chiamata alla funzione risultato=', risultato4);
// console.log( 'REDUCE !!!',  [1,2,3].reduce(algebra, 0));

git

// const risultato2 = somma([1,2,3]);
// console.log('sono dopo la chiamata alla funzione risultato=', risultato2);
// somma([10,40, 50]);








