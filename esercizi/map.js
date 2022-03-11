
// data una lista di valori numerici, restituirla con i valori raddoppiati
// esempio :
// [1,2,3] diventa [2,4,6]
// la lista radoppiata ogni valore viene incrementato di 1
// di questo risultato ogni elemento viene diviso per 2

// esempio = entra [1,2,3] esce [1.5, 2.5, 3.5]

const doubleAndSum1AndShare2=function(lista){
    const listaAggiornata = lista; // faccio un alias per aumentare la semantica

    for(let i=0; i<lista.length; i++){
        const valore = lista[i];

        const doubleValue = valore * 2;
        const doubleValuePlusOne = doubleValue + 1;
        // qui è pronto il risultato per ogni elemento richiesto
        const doubleValuePlusOneShareTwo = doubleValuePlusOne / 2;

        // aggiorno (update) l'elemento i-esimo di list
        listaAggiornata[i]=doubleValuePlusOneShareTwo;
    }
    return listaAggiornata; // RITORNO lista aggiornata
}

const listaDoubleValuePlusOneShareTwo = doubleAndSum1AndShare2([1,2,3]);


console.log(`listaDoubleValuePlusOneShareTwo = ${listaDoubleValuePlusOneShareTwo}`);