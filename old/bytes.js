const factors = ['b','k','m','g', 't'];

function bytes(str){
    const factor = str.slice(-1);
    const numberStr = str.slice(0, -1);

    const idx = factors.indexOf(factor);
    if (idx<0) return 'error';
    const num = Number(numberStr); // parseInt();
    const multipli = Math.pow(1024, idx);
    return num * multipli;
}

console.log('bytes', bytes('100k'));

// console.log('=', bytes(input));