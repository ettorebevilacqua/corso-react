le variabili e la loro visibilità let , var, const

var a=1;

if (a===1){
    a=2;
    var b=2;
}

console.log(a, b); // a=2 b=2;

// proviamo a assegnare con let

var a=1;

if (a===1){
    a=2;
    let b=2;
} // b--> da qui non esiste piu

console.log(a, b); // a=2 b= ??? // errore b undefined

// proviamo con una funzione e con let a:

let a=1;

const funz = (a===1) =>{
    a=2;
    let b=2;
} // b--> da qui non esiste piu

console.log(a, b); // a=2 b= ??? // errore b undefined

Una regola, è quella di usare le variabili a minore visibilità , e non modificabili, evitare quindi le collisione dei nomi , e le scritture su variabili anonime, e fuori contesto.

Quando possibile, le variabili non modificabili, se cambiano valore vengono assegnate a nuove variabili con un nome diverso, il nuovo nome rispetto al precedente, prende il siginificato della modifica precedente, per esempio posizione se aumento sarò nuovaPosizione, se eventualmente devo calcolare la differenza , ho il valore originale non sovrascritto.

i tipi di variabili :

generalmente nei linguaggi di programmazione tipizzati, si indica il tipo di variabile :

let a:int = 4;
let b:float = 4.4;
let c:string = 'ciao';
let d:boolean = true;
let c:time = new Date();
let d:array = [1,2,3];
let e:object = { nome:'rossi', indirizzo: '', esami:[{}, {}]};

In javascript dietro le quinte ci sono i tipi come li ho segnati, ma non cè bisogno di indicarli, essendo un linguaggio nato per scrivere "script" cioè piccolo codice scritto velocemente, dove servono meno controlli impliciti sugli errori.


I TIPI NULL E UNDEFINED

Abbiamo pure due tipi che indicano valori nulli :

let a = null;
let b = undefined;
let c;
// c non è mai stato scritto
c=null;
// qui c è stato scritto


qui c ha valore undefined, perchè dichiarato ma non assegnato, quindi il valore indefinito.
Invece posso assegnare il valore null, a una variabile, per indicare che non ha valore.

Da non confondere il "non ha valore" in tutti e i due casi con undefined e null la variabile non ha valore,
ma null lo devo assegnare, ma undefined viene "ovviamente" assegnato quando non si conosce il valore, perchè mai è stato assegnato,
quindi undefined, ci dice che la variabile non è stata mai "toccata", anche se posso dare tale valore.

Assegnare i valori undefined, e null può indicarci come semantica a quale stato sta la variabile, ancora mai inizializzata con undefined, o se è stata resettata (quindi annullata dai valori precedenti) con null.

Generalmente è sconsigliato il loro uso, se non si consiglia di usare typescript che forza a non utilizzarle, in quanto valori nulli indicano che non cè stato un controllo sul valore, o in molti casi che è un valore non aspettato e questo porta a bug.


LE FUNZIONI : 

possiamo im prima battuta definire le funzioni come un raccoglitore di codice , dove si passano eventualmente dei parametri.

potrei scrivere : 

const lista1 = [2,4.6.2.3];
const totale1 = lista.reduce((acc, val)=> acc + val);
const media1 = totale / lista.length;

const lista2 = [2,4.6.2.3];
const totale2 = lista.reduce((acc, val)=> acc + val, 0);
const media2 = totale / lista.length;

ma se faccio una funzione "spostando il codice ripetuto" :
function media(lista){
    const totale = lista.reduce((acc, val)=> acc + val, 0);
    return totale / lista.length;
}

Di cui posso scrivere in formato ridotto, in modo che stia su una linea :
const media = lista => lista.reduce((acc, val)=> acc + va, 0) / lista.length;

Ma anche più leggibilmente spostare la funzione somma, che eventualmente riutilizzeremo :
const sommaFunz = (acc, val)=> acc + val;
const media = lista => lista.reduce(sommaFunz 0) / lista.length;

quindi potrei creare una funzione più generale chiamata totale combinando queste funzioni :

const sommaFunz = (acc, val)=> acc + val;
const totaleFunz = lista => lista.reduce(sommaFunz 0);
const mediaCalc = lista => totaleFunz(lista) / lista.length;

e riscriviamo il codice iniziale : 

const lista1 = [2,4.6.2.3];
const lista2 = [2,4.6.2.3];
const media1 = mediaCalc(lista1);
const media1 = mediaCalc(lista1);

Successivamente nel codice , se abbiamo bisogno, avendo ridotto le funzioni, abbiamo già a disposizione totale, o somma se la devo passare come funzione, come abbiamo visto con il reduce......

Si direbbe che abbiamo ridotto il codice, ma definendo le varie funzioni, non lo abbiamo proprio ridotto.
Semmai lo abbiamo ridotto, cioè separato, dal "rumore" di dirgli passaggio dopo passaggio cosa fare, 
indichiamo questi dettegli con un nome di funzione, che indica il risultato della operazione, no i suoi passaggi. 

LEGGIBILITA' DEL CODICE, FLUSSO DEL PROGRAMA 

io capisco più chiaramente calcolaMedia (dando un nome non abbreviato) , rispetto alle diverse istruzioni per farlo. 
chi legge il programma , non gli interessa cosa faccia di preciso calcolaMedia, ma cosa viene fatto in modo più generale,
in quanto deve seguire il flusso del programma, quindi i principali "passaggi" che fa, se cè un errore o devo fare una modifica, mi interessa entrare a "fixare" quella specifica funzione che non si comporta come dovrebbe.

Spezzare le funzioni in piccole sotto funzioni, dando nomi sensanti aumenta la semantica, quindi la leggibilità, 
anche se per un non programmatore è arabo, quello che cè scritto deve essere quanto più chiaro umanamente, dove in alcune parti anche un non programmatore più o meno può capire, in questo esempio, leggendo calcolaMedia(lista), anche un non programmatore intuisce cosa significa qualla "cosa", ma ovviamente a noi ci interessa che capiamo noi stessi e gli altri programmatori.









