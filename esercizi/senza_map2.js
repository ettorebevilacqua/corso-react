
// data 2 liste di valori numerici, la prima restituirla con i valori raddoppiati
// la seconda invece la restituiamo sommata a 1 e moltiplica per 2

// esempio :
// lista 1 entra [1,2,3] esce [2, 4, 6]
// lista 2 entra [1,2,3] esce [4, 6, 8]
// le due liste sono indipendenti, voglio riutilizzare le funzioni


const qualcosaDaFare=function(lista){
    const listaAggiornata = lista; // faccio un alias per aumentare la semantica

    for(let i=0; i<lista.length; i++){
        const valore = lista[i];
    }
    return listaAggiornata; // RITORNO lista aggiornata
}

const doubleList = qualcosaDaFare([1,2,3]);
const sumOneAndDoubleList = qualcosaAltroDiversoDaFare([1,2,3]);

console.log(`listaDoubleValuePlusOneShareTwo = ${listaDoubleValuePlusOneShareTwo}`);