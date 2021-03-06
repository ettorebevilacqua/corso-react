/*
Separazione delle responsabilità , specilizzazione

le funzioni dovrebbero essere scritte in modo che si occupano di un preciso problema,
diciamo che si assumono una singola responsabilità

In altre parole, invece di fare una grossa funzione,
la posso spezzare in piccole funzioni specializzate a fare 1 sola cosa

Questo rende più facile la scrittura, la leggibilità e il mantenimento del codice,
oltre che ampliare il concetto di riutilizzo delle funzioni

*/


/*
   la funzione MAP che potrei chiamare cicla e trasforma
    cicla la lista e per ogni elemente applica una funzione di trasformazione
   restituendola trasformata

   da questo esempio deve essere chiaro, che la funzione map è specializzata a fare 1 sola cosa,
   ciclare la lista, ma demanda che tipo di operazione fare a una funzione passata.

   Come dire: cara map , ciclami la lista che ti passo,
    e per ogni elemento esegui la funzione che ti passo e aggiorna l'elemento della lista

    dentro al for chiamo la funzione passata, passando il valore della lista di indice i.
*/


// NON DEVE SPORCARE LA LISTA ORIGINALE
/**
 * il map chiama dentro il ciclo for, la funzione callback, passando i suoi parametri 
 * quali il valore della lista a un certo indice e l'indice stess
 * @param {*} lista 
 * @param {function} callback la funzione  passate prende i parametri lista e callback
 * @returns 
 */
function map(lista, callback){
   const newList=[];
   for(let i=0; i<lista.length;i++){
       // viene passata la funzione calcola dove qui viene richiamata
       // ho spostato fuori la logica che deve fare il fora
       // la fun parametro czione passata deve essere dichiarata
       // con unhe 2

       const val = callBack(lista[i], i, list )
       newList.push(val);
   }
   return newList;
}

const sommaUno = function(valore){

    return valore + 1;
}

const sommaConIlPrimoElementoDellaLista = function(valore, i, lista){

    const fond = list.find(valCorrente=>valCorrente === valore); 
    if (found) return 
    return valore + first;
}

// qui ho scritto qui sotto function in modo ridotto per scrivere una funzione solo su una riga
// il simbolo => significa function
// vedere differenza con sopra quanto riduciamo

const dividi = valore => valore  / 2;


const lista=[1,2,3,4,5];
console.log('lista prima del map =', lista);

const sommataUno=map(lista, sommaUno );
console.log('lista dopo sommaUno =', lista);
console.log('sommataUno  =', sommataUno);

const divisaDue = map(lista, dividi );
console.log('lista ora è =', divisaDue);
const divisaDue = map(lista2, pippo );

const upper= str => str.toUpperCase();
//const listaUpper= map(['paolo','michele','pio'], upper );


//console.log(listaDivisa);
// console.log(listaUpper);


