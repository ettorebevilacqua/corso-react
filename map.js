

// la funzione map che potrei chiamare cicla e trasforma
// cicla la lista e per ogni elemente applica una funzione di trasformazione
// restituendola trasformata

function map(lista, calcola){
    for(let i=0; i<lista.length;i++){
        lista[i] = calcola(lista[i]) // aggiorna la lista raddoppia
    }
    return lista;
}

const sommaUno = valore => valore +1;
const dividi = valore => valore  / 2;
const listaRaddoppiata= map([1,2,3], sommaUno, );
const listaRaddoppiata2= map([1,2,3], dividi );

const upper= str => str.toUpperCase();


const listaUpper= map(['paolo','michele','pio'], upper );

console.log(listaRaddoppiata);
console.log(listaRaddoppiata2);
console.log(listaUpper);


