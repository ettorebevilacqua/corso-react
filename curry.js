

// voglio stampare ogni un secondo un valore incrementato 
let count = 1000;


function counter(count) { // version di count locale e privata che non va in collisione 
    console.log('sono dentro a counter con count = ', count)

    return function funzEventoChiamataAlTimeout() {
        count += 1;
        console.log('sono stata chiamata setInterval', count);
        return count
    }
}

const cosaRitorni = counter(2);
// cosaRitorni è la variabile alla funzione non invocata 
console.log(cosaRitorni() );
console.log(cosaRitorni() );
console.log(cosaRitorni() );

// const funzSenzaParDaPassareInterval = counter();

// setInterval( funzSenzaParDaPassareInterval, 1000);