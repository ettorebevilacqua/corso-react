
/** 
 Le funzioni permettono di eseguire un blocco di codice.
 le funzioni normalemente si dichiarano per essere chiamate più volte
 le funzioni possono accettare dei parametri
 i paramentri vengono dichiariti dentro le parentesi della dichiarazione della funzione
 i parametri passati prendono un nome a piacimento.
 quando chiamo la funzione passo dei valori come parametri.
  
*/

function somma(listaPassata){
    console.log('sono dentro a somma, listaPassata=', listaPassata);
    let accumulatore = 0;
    console.log('sono dentro a somma, listaPassata.length=', listaPassata.length);
    // SE LISTA PASSATA NON HA .LENGTH E NON È INDICIZZABILE QUI SOTTO NON FUNZIONA
    console.log('typeof(listaPassata)', typeof(listaPassata));
    if (typeof(listaPassata) === 'number') return listaPassata; 
    
    for(let i=0; i<listaPassata.length; i++){
        const valore=listaPassata[i];

        accumulatore +=  valore;
        console.log('sono dentro al for valore=' + valore + ' i='+ i, 'acc='+accumulatore);
    }

    return accumulatore;
}


// Qui sotto chiamo la stessa funzione più volte passando parametri diversi.
/*
const risultato = somma([8,2,3]);
console.log('sono dopo la chiamata alla funzione risultato=', risultato);
const risultato2 = somma([1,2,3]);
console.log('sono dopo la chiamata alla funzione risultato2=', risultato2);
*/

const risultato3 = somma(5);
 console.log('sono dopo la chiamata alla funzione risultato3=', risultato3);









