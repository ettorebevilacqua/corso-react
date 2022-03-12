dato un progetto dentro una cartella 

possiamo inziallizarlo come un repository github

git init

e trovo una cartella nascosta .git

cosa è un repository git ??

una cartella , con la sotto cartella gitt

git init inzializza un repository creando la cartella .git

aggiungiamo tutti i file presenti nella cartella per il commit

git add .

il commit, significa inserire in git le utime modifiche sui files con il punto indico che voglio tutti i files,
se no gli passo il nome del file singolo che voglio inserire. 

ora posso fare il commit, (dopo che gli ho detto su quali files)

git commit -m "first commit"

il parametro -m permette di inserire un titolo.
il titolo è la spiegazione del motivo delle ultime mofiche.
visto che il progetto è nuovo e non ci sono modifiche scrivo possibilmente in inglese
first commit come proposto
successivamente , per esempio ho inseirto i primi titoli del git commit -m "titoli in html"

creiamo il primo branch 
git branch -M main 

cosi crea il branch e si sposta con il parametro -M main

ora lo colleghiamo al url di git 

prendo l''url del progetto git https://github.com/ettorebevilacqua/lezioni_js 
e aggiungo alla fine .git quindi diventa

https://github.com/ettorebevilacqua/lezioni_js.git

e eseguiamo il comando per aggiungere l''orgine esterna
git remote add origin https://github.com/ettorebevilacqua/lezioni_js.git  // qui aggiunge il repositor

e pushiamo le modifiche con il parametro -u
git push -u origin main

qui gli dico di creare main nel repository remoto, in quanto lo abbiamo creato solo in locale

se da errori, e vi chiede di fare il pull, vi da errore perchè potrebbe trovare delle differenze con il repository su git, gli possiamo dire di ignorare, forzando la versione attuale locale che abbiamo

git push -u origin main --force

// attenzione a force qui non abbiamo problemi a chiamarlo perchè sono sicuro che voglio che la versione locale attuale corrisponde a quela remota 

cosa poteva fare , più semplicemente senza ammattirmi con tutti questi comandi ?? 

crea un repository su git , faccio aggiungere readme.git , .gitignore
dop che ho creato il repository

banalmente faccio

git clone <indirizzo git>


passaggio utile

io ho il mio progetto in  locale con i miei files
su an altra cartella temporanea faccio il clone del progetto,
e copio i files sulla mia cartella se voglio ggiornare dal server al mio progetti, 
se no copio, la mia cartella su tmp, e faccio sul push, cosi ho aggiornato dalla mia cartella al server al mio proget



se git ci chiede nome utente e password

bisogna creare l'access token su git 
vedi qui https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token

e quindi dare nome utente, l'utente di git 
password, l'access token generate 


comando utile 
git stash 