## git init
Questo comando imposta la cartella dove è stato evocato come repository git, inserendo in essa la certella .git che contine i files del suo database e configurazine. 

## git clone
Scarica l'ultima versione da un repository git in una cartella del nostro pc detta locale.

`git clone <repository url>`

con il parametro -b scarico solo il branch indicato

`git clone <repository url> -b <branch name>`

## git fetch 
fetch scarica le ultime modifiche ma non aggiorna il nostro codice a differenza di git pull, in questo modo tengo invariate le mie modifiche, ma posso tenere traccia degli ultimi commit e nuovi brach altrui. 

## git pull
esegue il fetch scaricando l'ultima versio del branch corrente, e esegue il merge con le modifiche del branch locale.


## git checkout <branch>
Con checkout ci spostiamo su un determinato branch.

`git checkout <branch name>`

Con il parametro -b crea il branch (se non esiste) e si sposta

`git checkout -b <branch name>`


## git add

quando ho modificato dei file, devo indicare a git quali voglio inserire nel commit per aggiornalrli sul repository.

posso indicare 1 files, o più files separati dallo spazio
git add <nome file1>  <nome file2>

oppure inserire tutti i files modificati, inserendo un punto piuttosto che un nome file.

`git add .`

## git commit

Una volta che abbiamo inserito con add i files moficati, in le "salviamo" nel branch , in prarica facciamo uno snapshot una foto dello stato delle modifiche.
Con il paramentro -m indichiamo una descrizione del commit.

`git commit -m "<commit message>"`

`git diff`

Potete usare questo comando per vedere le modifiche nel branch corrente