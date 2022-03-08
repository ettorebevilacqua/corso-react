
let a = 5;
// let a = 6; 

console.log('a=', a); // a=2 b=2;

function start() {
    const a = 1;
    let b = 5;

    if (1 === 1) {
        a = 2;
        console.log('b è vivo', b);
    }

    console.log('versione if visibilità a e b =', a, b); // a=2 b=2;

    function funz() {
        a = 100;
        var c = 5;
        console.log('b è vivo', c);
    }

    funz();

    // qui b non è più visibile 
   // console.log('visibilità a e b =', a, c); // a=2 b=2;
}

start();
