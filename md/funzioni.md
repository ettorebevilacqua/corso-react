# FUNZIONI

> Una funzione è un insieme di istruzioni racchiuse in un blocco di codice, che può essere contraddistinto da un nome, può accettare argomenti o parametri di ingresso e restituire valori.

&nbsp;

## Definizione di funzione :
```
function nome(argomenti) {
    // istruzioni
}
```

## invocazione o chiamata a funzione

Se definisco solo la funzione non serve a nulla, la definizione da il nome della funzione, gli **argomenti** e dentro il corpo le istruzione che userano gli eventuali argomenti passati. 

esempio se voglio definire una funzione che somma due numeri a e b :
```
function (a, b){
    return a+b;
}
```

la funzione restituisce la sua elaborazione interna con return , ma posso anche non restituire nulla, ad esempio una funzione che fa il log di un messaggio e valore, o una funzione di evento cioè che viene chiamata ad esempio quando si fa onClick su un elemento DOM (istanza di tag HTML) : 

```
function Log(messaggio, valore){
    console.log(messaggio, valore );
}
```
## Esempio di utilizzo : 

```
function somma(a, b){
    return a + b;
}

somma(4, 5);

let base = 5;
let altezza = 10;
let perimetro = somma(base, altezza) * 2;
```

Come vediamo , generalemente le funzioni servono per non ripetere il codice, o se anche se servissero solo una volta, ci permette di separare il codice, quando esso inizia a crescere e la lettura del codice si complica. 

```
/* funzione  che calcola tutte le occorenze di o in due  stringhe e le somma
*/

function(a, b){
    
     // variabile accumulatore di 'o' in a
    let countOInA = 0;
    
    // variabile accumulatore di o in b
    let countOinB = 0;

    //ciclo i caratteri di a, e aggiorno il suo accumulatore
    for (let i=0; i<a.length; i++){
        if(a[i]==='o'){
            countOInA++;
        }
    }

    //ciclo i caratteri di b, e aggiorno il suo accumulatore
    for (let i=0; i<b.length; i++){
        if(b[i]==='o'){
            countOinB++;
        }
    }
    
    // restituisco la somma degli accumulatori
    return countOInA + countOinB:
}
```

Dentro al codice vediamo i 2 cicli for che fanno la stessa cosa su due diverse stringe aggiornando i rispettvi accumulatori.

Questo ci propone di creare una funzione specializzata che data una stringa ci restituisce il conteggio di una occorrenza, ma vediamo come ci accorgiamo della necessità di questa funzione separata : 

ìl codice in comune è  





a + 2a + 4b + 3c + 2a +4c
5a + 4b + 6c 


per le occorenze di a
```
    for (let i=0; i<b.length; i++){
        if(a[i]==='o'){
            countOInA++;
        }
    }
```
per le occorenze di b
```
    for (let i=0; i<b.length; i++){
        if(b[i]==='o'){
            countOinB++;
        }
    }
```

il codice è uguale, cambia solo la variabile a con b, e countOInA con countOinB

quindi provo a separare questo codice dentro una funzione, visto che il suo scopo è racchiudere codice in un blocco.


```
function calcolaOccorenze(){

    for (let i=0; i<b.length; i++){
        if(b[i]==='o'){
            countOinB++;
        }
    }
}
```

per il momento ho solo fatto copia e incolla di uno dei due for, e messo dentro una funzione, però devo aggiustare, perchè cosi non funziona, in particolare ci da errore, he b e countOinB non sono definiti, la funzione visto cosa vuole fare il codice la chiamo calcolaOccorenze

quindi provo ad aggiustare che non dia errore

```
function calcolaOccorenze(){
    let b= ????
    let countOinB = 0;
    for (let i=0; i<b.length; i++){
        if(b[i]==='o'){
            countOinB++;
        }
    }
}
```
Provo quindi a definire le variabili b, countOinB
non ho nessun problema per countOinB ad assegnare 0, perchè 
varibile contantore (accumulatore), che deve partire per forza di cose da 0, e nella if se vera aumentato.

Ma rimango con b con il problema che valore gli assegno ?? 
e questo mi manda in confusione, specie dopo che mi è chiaro l'uso di countOinB.

La varibile b, non la riesco ad assegnare perchè la devo passare dal esterno, in modo che la funzione funziona con qualsiasi stringa passata :

```
function calcolaOccorenze(str){
    let count = 0;
    for (let i=0; i<str.length; i++){
        if(str[i]==='o'){
            count++;
        }
    }
    return count;
}

calcolaOccorenze('pippo'); // 1 
calcolaOccorenze('rotondo'); // 3
```


```
/* funzione  che calcola tutte le occorenze di o in due  stringhe e le somma
*/

function(a, b){
    //ciclo i caratteri di a, e aggiorno il suo accumulatore
    const countOInA = calcolaOccorenze(a);
    const countOinB = calcolaOccorenze(b);

    // restituisco la somma degli accumulatori
    return countOInA + countOinB:
}
```

scriviamola ancora più ridotta 


```
function calcolaOccorenzeStringhe(a, b){
    return calcolaOccorenze(a) + calcolaOccorenze(b):
}
```

```
const calcolaOccorenzeStringhe=(a, b)=>calcolaOccorenze(a) + calcolaOccorenze(b);

```