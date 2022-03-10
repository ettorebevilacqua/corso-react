# git branch (i rami)]

quando faccio pull in genere scrivo

`git pull origin main`

che significa ? fai il pul sul origine main, piuttosto che su un'altra chiamata pippo dove quindo sono io a creare nomi a piacimento.

e cosa intende per origine ?? 

io sto lavorando su un progetto, ad un certo punto voglio fare delle modifiche , ma dopo queste modifiche il codice non funziona, e ho bisogno di farlo funzionare per vedere cosa non va, quindi vorrei tornare indietro, ma questo significa eliminare le ultime modifiche, senza git uno copia i files modificato da qualche parte e poi li riallinea dopo.

O anche posso avere lo scenario di 2 programmatori dove uno fa una funzionalità, per esempio la form della password, e un altro la form dei clienti.

## versione parallela 
Si crea l'esigenza quindi di avere un'altra versione del progetto, che poi ho bisogno di riallineare alla versione principale.

proviamo a scrivere :

`git branch`

e mi risponde se non avete crato branch cosi :
main 

mi dice che cè solo il branch main, premo q per chiudere

per creare un nuovo branch devo scrivere

`git branch local`

creo un branch local, per fare modifiche locali, oppure se lavoro in team potrei fare un brach con il mio nome, dove lavoro sulla mia versione del progetto, senza toccare il progetto principale, in genere messo dentro il branch main.

una volta creato devo cambiare branch spostandomi in questo nuovo creato. 

`git checkout local`

ora scrivo `git branch` di nuovo per vedere la lista dei brach

e mi esce: 

* local 
  main 

  vedo la lista dei branch, local e main , ma local ha un asterisco che significa che ti trovi in quel branc.

  un metodo per creare un nuovo branch è spostarmi dentro è farlo con checkout
  
  `git checkout -b local`

ora provo a creare un file new.js su local, e provo a tornare su main

`git checkout main`

dentro main non trovo il file nuovo che ho creato DENTRO A LOCAL, questo per far notare che ora abbiamo due versioni differenti.

ritorniamo a local 

`git checkout local`

e ora voglio che main si aggiorna con le modifiche di local, quindi che inserisca new.js dentro a main. 

