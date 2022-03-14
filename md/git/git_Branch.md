# git branch (i rami)

Il repository git è suddiviso in branch, in italiani i rami, sono diciamo come delle stanze dove posso trovare diverse versioni dello stesso progetto.

Inzialmente alla creazione del commit tramito 'git init' non avendo altre indicazioni, il repository dovendo inserire il progetto in un primo branch, in quanto è il branch che contiene un certo stato dei files del progetto e il repository è quindi un contenitore di uno o più brach, git lo inserisce in un branch root principale chiamato master.

## a cosa servono i branch, cosa è la diramazione ?

Dicevamo che partiamo con un primo e unico branch inzialmente, ad un certo punto vogliamo inserire una nuova implementazione, per esempio un pulsante e il codice che lo gestisce.

Ma facendo questa implementazione potrei "rompere qualcosa" cioè le mie modifiche purtroppo non fanno più funzionare qualcosa del progetto, dove poi mi torna utile, laciare il progetto nella verione funzionante, quindi precentemente alle mie modifiche. 

Quindi git ci permette di creare un nuovo branch, quindi un nuovo ramo indipendente da quello principale dove fare queste implementazioni.

con il comando `git branch pulsante`  creiamo un branch con nome pulsante, dove viene implementato questo codice per il pulsante.

ci troviamo quindi con 2 branch

- main o master, il principale
- il branch pulsante appena creato. 

essendo ora presente se già non l' ho fatto mi sposto dal branch principale in genere nominato main (diversamente si chiama in modo predefinito master) con il comando `git checkout pulsante`

Da qui tutte le modifiche che faccio le faccio nel ramo o diramanzione pulsante, senza che il branch inziale principale sia in qualche modo modificato, rimanendo quindi nella versione precedente alle mie nuove modifiche. 

posso quindi spostarmi da un branch a un altro cosi posso vedere le due versioni, quella precedente e quella nuova con codice del pulsante.

## il merge (l'unione del codice):

Una volta che ritengo pronto il codice del pulsante, avendo una versione dentro al branch pulsante funzionante, posso fare il merge delle modifiche sul branch pulsante dentro al repository principale, qui in questo esempio chiamato main. 

Per fare questo devo tornare sul branch principale main con il comando :
`git checkout main`

dare il comando per il merge (unione):

 `git merge pulsante`

Attenzione, come dicevo devo lanciare questo comando dentro al branch main , in quanto git capisce con tale comando che nella posizione attuale quindi il branch main, devo inserire le modifiche del branch pulsante.

In questo modo ci aggiorna allineando le modifiche il branch main con il branch pulsante. , ritrovando questa nuova funzionalità in main.

Questo discorso è ancora più importante e git diventa fondamentale, quando più sviluppatori modificano lo stesso codice. 

Per non creare disordine e complicati inserimenti delle modifiche dei diversi sviluppatori, lo svilppatore lavora su un ramo branch separato, quindi senza disordini, le sue modifiche saranno rese dispobili a tutti dopo il merge che controlla quando è possibile le modifiche sullo stesso file. 

## I conflitti o collisione delle modifiche

quando faccio il merge con un altro branch, lo stesso files potrebbe essere stato modificato , facciamo un esempio :

Contenuto di un file prima delle modifiche
```
const a = 5;
const b = 'un testo';
const c = a + b;
```
modifichiamo il valore di a con 8 e il testo :

```
const a = 8;
const b = 'un testo diverso';
const c = a + b;
```
se da qui facciamo il merge, git non trova collisioni, ed esegue il merge con la seconda versione.

Ma qualcuno prima di me potrebbe aver fatto il merge, o modificato direttaente il main (pessima pratica), quindi mi potrei trovare con il file :

il files in main modificato da altri in questo caso il valore della variabile a :

```
const a = 3; --> qui un altra modifica
const b = 'un testo ';
const c = a + b;
```

quindi mi trovo `const a=5` nella versione non modificata,
`const a=8` modificato da me, e `const a=8` modificato da un altro utente.

In questo caso ho il conflitto , quale valore è valido ? a=8 o a=3,
in questo caso devo risolvere il conflitto dovendo scegliere se prendere la mia modifica con a=8 o quella altrui con a=3.

