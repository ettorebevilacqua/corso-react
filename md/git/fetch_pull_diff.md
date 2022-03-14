## Cos'è Git Fetch?
Git consente agli utenti di mantenere un repository locale che è il clone del repository centrale memorizzando i dati come una serie di istantanee.

Ogni volta che commetti o apporti delle modifiche al codice sorgente, Git cattura un'istantanea di tutti i file / codici in quel momento e li memorizza come riferimenti.

Con un semplice comando push, gli utenti possono inviare i loro commit al repository principale per condividere le loro versioni con il resto del mondo.

Quando si utilizza il comando git fetch, è sufficiente scegliere di recuperare le modifiche apportate nel repository remoto e memorizzarle nella macchina locale.

Tuttavia, `non integra le modifiche` nel tuo repository locale. Questo `ti tiene aggiornato con i tuoi colleghi sviluppatori` e su cosa stanno lavorando.  

![`commit`](img/difference-between-git-fetch-and-git-pull.png)


## Cos'è Git Pull?
Il comando Git pull viene utilizzato per scaricare le modifiche al repository Git da un repository remoto e unire tali modifiche nel repository locale.

Pull è fondamentalmente `git fetch seguito da git merge` quindi una volta scaricate le modifiche , fa il merge e trovo le modifiche sul codice.

In termini semplici, introduce semplicemente le modifiche nel repository remoto in cui si mantiene il proprio codice.

## Differenza tra Git Fetch e Git Pull

Git fetch e Git pull sono i due comandi più importanti utilizzati per gestire in modo efficiente i repository git. Mentre entrambi i comandi vengono utilizzati per scaricare nuovi dati da un repository remoto, lo fanno con obiettivi molto diversi in mente. Mentre `git fetch` è usato per recuperare le ultime modifiche apportate nel repository remoto, ` fetch quindi non unisce quelle modifiche con il tuo repository locale`.

Git pull, d'altra parte, non solo scarica le modifiche dal repository remoto ma le integra anche con il repository locale.

## Scopo di Git Fetch e Git Pull
Git fetch `è un comando innocuo` utilizzato per scaricare e rivedere gli ultimi commit effettuati da altre persone dai rami di localizzazione remota, `ma senza unirli nel repository locale`. Afferra i cambiamenti dal repository remoto e li memorizza nel tuo repository locale.

`Git pull è una scorciatoia per git fetch seguito da git merge` che uniscono automaticamente i commit nel repository locale senza rivedere i commit.

## Considerazioni 
Git consente a un utente di conservare una copia del proprio repository locale che è il clone del repository centrale in modo che i commit vengano eseguiti localmente senza interferire con il codice nel repository principale. Fetch mantiene semplicemente aggiornata la copia locale dell'archivio remoto trasferendo i commit dall'archivio remoto al repository locale. L'importazione di commit nelle filiali locali ti consentirà di tenere il passo con le modifiche apportate da altre persone.

Pull apporta le modifiche al repository di codice locale per aggiornare il repository locale con il repository remoto.

## Utilizzo di Git Fetch e Git Pull
Il comando Fetch è utile quando vuoi vedere su cosa sta lavorando chiunque altro, cosa che ti rende facile rivedere i commit spinti da altri sviluppatori prima di integrare le modifiche con il tuo repository locale. Puoi farlo usando il comando "git fetch" che cattura tutti i rami dal repository remoto.

È possibile eseguire un pull utilizzando il comando "git pull" che recupera la copia remota del ramo e la unisce alla copia locale. Questo è esattamente come usare il comando "git fetch" seguito da "git merge".