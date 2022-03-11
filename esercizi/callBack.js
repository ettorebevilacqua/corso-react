
// voglio visualizzare 

const start = new Date().getTime(); // quanti millisecondo dal 1970

function timer(callBack) {
    let acc = 0;
    for (let i = 0; i < 100000000; i++) {
        const end = new Date().getTime();
        const timeDiff = end - start;
        if (timeDiff % 1000 === 0) { // ogni secondo
            callBack();
        }
    }
}

let pos=0;
const cubo={x:0,y:0};

function muoviCubo (){
    pos +=1;
    cubo.x = pos;
    console.log('cubo x=', cubo.x);
}

timer(muoviCubo);
