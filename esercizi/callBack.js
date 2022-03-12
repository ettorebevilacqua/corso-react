
// voglio visualizzare 

const start = new Date().getTime(); // quanti millisecondo dal 1970

function timer(callBack) {
    let acc = 0;
    let timeOld=0;
    for (let i = 0; i < 100000000; i++) {
        const end = new Date().getTime();
        const timeDiff = end - start;
        if ( timeOld !== timeDiff  && timeDiff % 1000 === 0) { // ogni secondo
            callBack(timeDiff);
            timeOld = timeDiff;
        }
    }
}

let pos=0;
const cubo={x:0,y:0};

function muoviCubo (timeDiff){
    pos +=1;
    cubo.x = pos;
    console.log('cubo x=', cubo.x, timeDiff);
}

timer(muoviCubo);

console.log('dopo timer');
