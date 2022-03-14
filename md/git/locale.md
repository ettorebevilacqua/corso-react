# Comandi git

Con git teniamo traccia di tutte le modifiche ai files e cartelle presente in una cartella.

E qui ho due casi :

- Cartella con i files del progetto già esistente.

- La cartella del progetto non esiste ma esiste su gitHub il progetto.

CASO CARTELLA GIA' ESISTENTE SUL PROPRIO PC:

---

Creo su gitHub un repository nuovo e vuoto, e tengo traccia una volta creato quale è il suo url dal browser.

Apro la console, e mi posiziono dove so trova il mio progetto per esempio il progetto A :

```
cd c:/progetti/progettoA
```
e inserisco il comando per rendere la cartella come cartella di git, o anche chiamato repository.
```
git init
```
Dopo questo comando trovo una cartella nascosta chiamata .git

**cosa è un repository git ??**

diciamo quindi : 
`git init inzializza un repository creando la sotto cartella .git nella cartella dove ho eseguito il comando` 

aggiungiamo tutti i file presenti nella cartella per il commit

```
git add .
```
Il commit, significa inserire nel repository git , tutti i files che sono stati modificati.

Essendo nuovo il repository, tutti i files e cartelle presenti verranno inseriti, cosi eseguiamo il primo commit.

```
git commit -m "first commit"
```
il parametro -m permette di inserire un titolo.

Il titolo è la spiegazione del motivo delle ultime modifiche, in questo caso perchè è il primo commit.

creo il primo branch (ramo) chiamato main
```
git branch -M main
```
cosi crea il branch e si sposta con il parametro -M main, quindi ora mi trovo a lavorare nel branch main.

`Ora lo colleghiamo al url di git`

Ma cosa significa collegarlo ??
avere una `origine remota` dove sincronizzo i miei files locali

prendo l''url del progetto git per esempio a questo indirizzo (dovete cambiare con il vostro indirizzo personale del vostro repository git) https://github.com/ettorebevilacqua/lezioni_js 
e aggiungo alla fine .git quindi diventa

https://github.com/ettorebevilacqua/lezioni_js.git

e eseguiamo il comando per aggiungere l''orgine esterna :
```
git remote add origin https://github.com/ettorebevilacqua/lezioni_js.git
```
Cosi abbiamo aggiunto l'origine esterna, in questo caso di gitHub che fa da server git.

Per inserire il commit precedente nel repository origine di gitHub si dice faccio il push delle modifiche presenti sul mio repository locale su quello di git.

```
git push -u origin main
```

con  il parametro -u gli dico di creare main nel repository remoto, in quanto main è presente solo locale.

se da errori, e vi chiede di fare il pull, vi da errore perchè potrebbe trovare delle differenze con il repository su git, gli possiamo dire di ignorare, forzando la versione attuale locale che abbiamo

git push -u origin main --force

**Attenzione** al parametro ***--force***.

Qui non abbiamo problemi a chiamarlo perchè sono sicuro che voglio che la versione locale attuale corrisponde a quela remota.

## Alternativa a questa iniziallizzazione :

Un metodo alternativo per creare un repository git con il mio progetto già presente

crea un repository su git , faccio aggiungere readme.git , .gitignore
dop che ho creato il repository

banalmente faccio

```
git clone <indirizzo git>
```

Il comando clone mi crea una cartella con il nome del progetto git, avendolo precendentemente creato su github vuoto, a questo punto copiamo i files del progetto dentro a questa cartella di git clonato.

Una volta copiati i files nella cartella clonata facciamo il commit e push aggiungendo tutti i files. 

```
git branch -m main
git add .
git commit -m "first commit"
git push -u origin main
```

Criamo il branch main e facciamo push con -u in modo che crea il branch main nel repository remoto.

Nome utente e password

bisogna creare l'access token su git 
vedi qui https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token

e quindi dare nome utente, l'utente di git 
password, l'access token generate 


comando utile 
git stash 