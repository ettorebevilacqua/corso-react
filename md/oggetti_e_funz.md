
Oggetti : contenitori di valori e funzioni:

Un oggetto, lo possiamo vedere in modo semplificato come un contenitore di valori, tipicamente :

const point = {x:1, y:2};

In questo modo , le 2 variabili x, y che identificano un punto , non le trovo "in giro per il codice" :

se devo rappresentare 2 punti per calcolare la distanza di 2 punti :

const x1 = 0;
const y1 = 0;
const x2 = 40;
const y2 = 30;

const dx = x1 - x2;
const dy = y1 - y2;

const distanza = Math.sqrt((dx * dx) + (dy * dy));

VERSIONE CON GLI OGGETTI :

const p1 = {0,0};
const p2 = {40, 30};

const dist = {
    x: p1.x - p2.x,
    y: p1.y - p2-y
};
const distanza = Math.sqrt((dist.x * dist.x) + (dist.y * dist.y));

un primo evidente vantaggio è che non devo creare le coppie di valori (x1 y1) (x2, x2) ecc
dove se qui dimezzo le variabili, se fosse un punto in 3D con un colore, e altro parametri, per ogni punti dovrei fare molte variabili tutte simili.

l'altro vantaggio è che se quindi devo rappresentare molti punti, quindi una lista, li raccolgo dentro essa, e cosi non ho nemmeno più nel codice molte variabili che rappresentano molti punti.

const punti =[
    {0,0},
    {2,3},
    {5,6}
]

dove il codice precendente cambia con 

const p1 = punti[0];
const p2 = punti[1];

const dist = {
    x: p1.x - p2.x,
    y: p1.y - p2-y
};

const distanza = Math.sqrt((dist.x * dist.x) + (dist.y * dist.y));

ma se dobbiamo fare le distanze a 2 e 2, meglio scrivere cosi 

const punti =[
    [{0,0}, {2,3}]
    [{5,6}, {4,6}]
];

un array che contiene una lista di array con 2 valuri di tipo punto; 





