// nuovo progetto 

echo "# corso-react" >> README.md // crea il file readme 
git init     // inizializza un repository, crea la cartella .git con il file di config
git add .   // aggiugiamo tutti i file 
git commit -m "first commit" // qui preparo i files per il push, serve una descrzione delle modifiche
git branch -M main // qui si sposta di RAMO 
git remote add origin https://github.com/ettorebevilacqua/corso-react.git  // qui aggiunge il repository remoto
git push -u origin main // mette dentro al branch main i file aggiunti con git add 

// repository esistente

git remote add origin https://github.com/ettorebevilacqua/corso-react.git  
git branch -M main 
git push -u origin main 

// generare accese stare attenti a fleggare la voce repo 
https://github.com/settings/tokens

la password è l'access token 
git clone urlrepository

ATTENZIONE una volta clonato il progetto, lui crea una cartella con il progetto, bisogna entrare dentro la cartella appena creata !! 
diversamente da errore che non ci si trova dentro al repository 

I comandi di TUTTI I GIORNALI 

git status vede le modifiche correnti, se non ci sono da vuoto 

// AGGIUNGIAMO I FILE DOVE VOGLIO FARE IL COMMIT 

git add . // aggiunge tutti file MODIFICATI
oppure git add nomeFile -> specifico un file, o divisi da spazio un elenco di file 

// devo fare il commit 

Il commit inserisce le modifiche dentro al repository locale, 
Se le voglio su quello esterno devo fare push 
IL PUSH CONFERMA LE MODIFICHE 



