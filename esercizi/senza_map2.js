
// data 2 liste di valori numerici, la prima restituirla con i valori raddoppiati
// la seconda invece la restituiamo sommata a 1 e moltiplica per 2

// esempio :
// lista 1 entra [1,2,3] esce [2, 4, 6]
// lista 2 entra [1,2,3] esce [4, 6, 8]
// le due liste sono indipendenti, voglio riutilizzare le funzioni


// LE FUNZIONI VANNO DOCUMENTATE
// QUALI PARAMETRI E DI CHE TIPO E COSA RITORNA COME TIPO

/**
 * cilca ogni elemento della lista e chiama la funzione passato con il valore attuale
 *
 * @param {function} calcola
 * @param {array<number>} lista
 * @returns {array<number>}
 */
const ciclaEdEsegui=function(calcola, lista){
    const listaAggiornata = []; // faccio un alias per aumentare la semantica

    for(let i=0; i<lista.length; i++){
        const valore = lista[i];
        const calcolato = calcola(valore);
        listaAggiornata.push( calcolato);
    }
    return listaAggiornata; // RITORNO lista aggiornata
}


const divide = (a, b)=> a / b;
const multipli= (a, b)=a*b;
const double = valore => valore * 2;
const addAndDouble = valore => (valore + 1 ) * 2;

const lista = [1,2,3];

const doubleList = ciclaEdEsegui( double, [2, 2, 4]);
console.log(`listaDoubleValuePlusOneShareTwo = ${doubleList}`);

const sumOneAndDoubleList = ciclaEdEsegui(addAndDouble, lista);
console.log(`listaDoubleValuePlusOneShareTwo = ${sumOneAndDoubleList}`);
