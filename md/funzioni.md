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

function(a, b){
    // conta tutte le occorenze del carattere O
    for (let i=0; i<)

}




