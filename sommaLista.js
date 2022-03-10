
/** 
 Le funzioni permettono di eseguire un blocco di codice.
 le funzioni normalemente si dichiarano per essere chiamate più volte
 le funzioni possono accettare dei parametri
 i paramentri vengono dichiariti dentro le parentesi della dichiarazione della funzione
 i parametri passati prendono un nome a piacimento.
 quando chiamo la funzione passo dei valori come parametri.

*/// ALT 96


// **************************** 
function leggiESomma(valore, accumulatore, i ){
    accumulatore +=  valore; // somma
    console.log(`sono dentro a tmp valore i=${i} acc=${accumulatore} `);
    return accumulatore
}

function somma(listaPassata, secondoPar){
    console.log(`sono dentro a somma, listaPassata= ${listaPassata} `);
    let accumulatore = 0;

    if (!listaPassata.length) return listaPassata + secondoPar;
    // if (typeof(listaPassata) === 'number')   listaPassata + secondoPar;
    for(let i=0; i<listaPassata.length; i++){
        leggiESomma(listaPassata[i], accumulatore, i );
        console.log(`sono dentro al for valore valore i=${i} acc=${accumulatore} `);
    }

    return accumulatore;
}



// Qui sotto chiamo la stessa funzione più volte passando parametri diversi.

const risultato = somma([1,2,3], 2);
console.log('sono dopo la chiamata alla funzione risultato=', risultato);
// const risultato2 = somma([1,2,3]);
// console.log('sono dopo la chiamata alla funzione risultato=', risultato2);
// somma([10,40, 50]);








