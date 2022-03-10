/*
Separazione delle responsabilità , specilizzazione

le funzioni dovrebbero essere scritte in modo che si occupano di un preciso problema,
diciamo che si assumono una singola responsabilità

In altre parol, invece di fare una grossa funzione,
la posso spezzare in piccole funzioni specializzate a fare 1 sola cosa

Questo rende più facile scrittura, la leggibilità e il mantenimento del codice,
oltre che ampliare il concetto di riutilizzo delle funzioni

*/


/*
   la funzione MAP che potrei chiamare cicla e trasforma
    cicla la lista e per ogni elemente applica una funzione di trasformazione
   restituendola trasformata

   da questo esempio deve essere chiaro, che la funzione map è specializzata a fare 1 sola cosa,
   ciclare la lista, ma demanda che tipo di operazione fare a una funzione passata. In

   Come dire: cara map , ciclami la lista che ti passo,
    e per ogni elemento esegui la funzione che ti passo e aggiorna l'elemento della lista

    dentro al for chiamo la funzione passata, passando il valore della lista di indice i.
*/

function map(lista, calcola){
    for(let i=0; i<lista.length;i++){
        lista[i] = calcola(lista[i]) // aggiorna la lista raddoppia
    }
    return lista;
}

const sommaUno = valore => valore + 1;
const dividi = valore => valore  / 2;
const listaRaddoppiata= map([1,2,3], sommaUno );
const listaRaddoppiata2= map([1,2,3], dividi );

const upper= str => str.toUpperCase();
const listaUpper= map(['paolo','michele','pio'], upper );

console.log(listaRaddoppiata);
console.log(listaRaddoppiata2);
console.log(listaUpper);


