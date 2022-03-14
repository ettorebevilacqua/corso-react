# GIT

git è un sistema per controllare le modifiche del codice, potendo tracciare tutti i cambiamenti e creare delle modifiche parallele per poi essere integrate nella versione principale.

Tramite il comamando git init, inizializziamo una cartella come repository git.

***Cosa è un repository git ?***

E' una cartella dove tengo tutti i files del mio progetto, e repository git è il database che tiene traccia di tutte le modifiche.

## Lo scopo di git

Lo scopo di git è tenere ordine al progetto, tracciando le modifiche effetuate sui files, con la possibilità di tornare a un preciso punto di modifiche.

L'altro suo più tipico utilizzo è quello di condividere il codice e le modifiche con altri sviluppatori, dove ognuno fa le modifiche su una personale versione, quando la sua versione è pronta queste modifiche vengono sincronizzate con il progetto principale, per essere integrate, senza eliminare le modifiche fatte da altri sviluppatori negli stessi file, in questo caso si dice che facciamo un merge.

## Il repository locale e remoto. 

Git può tornarci molto utile anche se utilizzato in modo isolato nel proprio computer, e sono l'unico che modifica il codice, ma anche in questo caso, torna utile che il codice si trovi su repository esterno in cloud, quindi su dei server sempre accessibili.

Esistono servizi gratuiti come github o gitlab che ci permettono di pubblicare i nostri progetti nei loro server git, in questo caso siamo interessati che i due repository quello locale e remoto siano sincrinizzati.

Il repository remoto esterno, permette di scaricare in locale tale repository, quindi di scaricare l'ultima versione del progetto, anche semplicemente per poter scaricare un progetto fatto anche di molti files, torna molto utile.

## un esempio pratico :

esempio di cartella con 3 files :

```
progetto
    | index.html
    | script.js
    | README.md
```

ora aggiungo un files lib.js e modifico qualcosa dentro script.js

```
progetto
    | index.html
    | script.js --> modificato
    | README.md
    ! lib.js --> nuovo file inserito
```

queste modifiche rendono il progetto differente dallo stato precedente, quindi diciamo ci troviamo con un nuovo snap shot , come dire fare una foto dello stato attuale del progetto con le nuove modifiche. 

Fatte quindi le modifiche, dobbiamo inserirle nel repository git, senza questo passaggio, il repository git rimane invariato, ma vede che alcuni  files nella cartella sono cambiati. 

A questo punto diamo un comando per inserire i files modificati diciamo per il `commit`, cioè per inserirli nel repository quindi dopo aver indicati quali files modificati voglio inserire nel repository con il commando di `commit`, e diamo una descrizione della natura di queste modifiche, per sempio inserito files di libreria lib.js, e importato dentro il file script.js.

Man mano che inseriamo i files modificati con `commit` e la descrizione delle modifiche, posso trovare la storia dei `commit` come da immagine di esempio :

![`commit`](img/commit.png)

possiamo vedere che l' utente Marcello Silvestri ha fatto un primo `commit`, poi ha creato il nuovo file index.html e poi in un `commit` successivo è stato modificato.

Da qui vediamo chiaramente come traccia tutta la storia delle modifiche.

Il push delle modifiche: 

Il commit quindi inserisce le modifiche nel repository locale, cioè nel nostro computer, ma esse ancora non sono disponibile nel server remoto sincronizzato alla mia cartella di git locale.

Per poter quindi inserirle nel repository remoto diamo un comando push, dopo questo comando i 2 repository sono sincronizzati. 

## Riassiumiamo i termini di git :

- `repository` : cartella dove git tiene traccia dei files modificati
  qui abbiamo 2 tipi di repository :
  - locale : la cartella git del mio computer
  - remoto : il server git che ospita il mio repository esterno. 
  
- `commit` : aggiungere i files modificati nel repository locale, dando una descrizione del motivo delle modifiche.
- `push`: portare l'ultimo commit, quindi le ultime modifiche nel repository remoto. 

Link a una buona guida su git non prolissa : 

https://www.mrw.it/programmazione/lavorare-branch-git_12472.html
https://www.mrw.it/programmazione/flusso-lavoro-git_12477.html
https://www.mrw.it/programmazione/git-repository-remote_12476.html
https://www.mrw.it/programmazione/comandi-git-reset-git-revert_12474.html
https://www.mrw.it/programmazione/comando-git-rebase_12473.html