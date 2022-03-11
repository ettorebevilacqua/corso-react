let pos=0;
const cubo={x:0,y:0};

function muoviCubo (){
    pos +=1;
    cubo.x = pos;
    console.log('cubo x=', cubo.x);
}

//setInterval(muoviCubo, 1000); // ogni secondo
// setTimeout(muoviCubo, 1000 * 10); // solo 1 volta ma dopo il tempo, ritardo

const persona={
    nome:'',
    a:'',
    indirizzo:''
}

// console.log(Object.keys(persona));
/*
const isPari = val => val % 2 === 0 ;
const filtrata = [1,2,3,4, 5, 6].filter(isPari);

const persone=[
    {nome:'rossi', city:'f'},
    {nome:'verdi', city:'d'},
    {nome:'bianchi', city:'f'},
    {nome:'gialli', city:'j'},
    {nome:'bevi', city:'a'}
];

const orderCrescPersona = (a, b) => {
    console.log(`à=${a.nome} b=${b.nome}` );
   return  a.city < b.city;
};

// const ordinata = persone.sort(orderCrescPersona);

console.log(ordinata);
*/
function somma(acc, valore, i){
    console.log(`acc=${acc} b=${valore} i=${i}`);
    acc *=valore;
    return valore;
}

const ridotta = [1,2,4].reduce(somma, 1);
console.log('ridotta', ridotta);
