
const giorni = {
    lun: { pos: 1, desc: 'lunedi' },
    mar: { pos: 2, desc: 'martedi' },
    mer: { pos: 3, desc: 'marcoledi' },
    gio: { pos: 4, desc: 'giovedi' },
    ven: { pos: 5, desc: 'venerdi' },
    sab: { pos: 6, desc: 'sabato' },
    dom: { pos: 7, desc: 'domenica' },
}

const impostazioni = {
    livello: 7,
    dataIscrizione: '21/03/2021',
    tema:'simple',
    lingue: {
        it: {
            lun: 'lunedi',
            mar: 'martedi',
            mer: 'marcoledi',
            gio: 'giovedi',
            ven: 'venerdi',
            sab: 'sabato',
            dom: 'domenica',
        },
        en: {
            lun: 'monday',
            mar: 'thuesday',
            mer: 'wedsday',
            gio: 'thusday',
            ven: 'friday',
            sab: 'saturday',
            dom: 'sunday',
        },
        fr: {
            lun: 'sss',
            mar: 'tttt',
            mer: 'www',
            gio: 'hiii',
            ven: 'fresss',
            sab: 'satteee',
            dom: 'sunssss',
        },
        us: {
            lun: 'monday',
            mar: 'thuesday',
            mer: 'wedsday',
            gio: 'thusday',
            ven: 'friday',
            sab: 'saturday',
            dom: 'sunday',
        },
    }
};

const persona = {
    nome: 'franco',
    cognome: 'rossi',
    indirizzo: {
        city: '22',
        pv: 'mi',
        cap: '00123',
    },
    email: '',
    tel: ['3333', '4444', '555'],
    studi: [
        { scuola: 'archimede', anno: 2001, voto: 50, titolo: 'diploma' },
        { scuola: 'sapienza', anno: 2006, voto: 40, titolo: 'laurea' },
        { scuola: 'corso web', anno: 2006, voto: 40, titolo: 'specializzazione' },
    ]
};

persona.tel[2];

// qui imposto quale vocabolario di lingua prendere 
const lingua = 'us';
const lingue = impostazioni.lingue;
const vocabolario = lingue[lingua]; // lingua === 'it' ? giorniDescIT : giorniDescENG;

// da qui in poi con traduttore, mi "traduce" sempre nella lingua corrente,
// non devo fare nessuna modifica al codice se cambio lingua

// console.log('giorno', vocabolario.sab);
// console.log('giorno', giorni.dom.desc, giorni.dom.pos - giorni.gio.pos);

// console.log(persona.tel[1]);
// console.log(persona.indirizzo.cap);
// console.log(persona.studi[1].scuola);
// console.log(persona.studi[0].voto);
console.log(persona.studi[1].voto + persona.studi[0].voto);
// let totale = 0;
/*
for (let i=0; i < persona.studi.length; i++){
    const voto = persona.studi[i].voto;
    totale = totale + voto;
}
*/

function media(lista){
    // media =  sommaValori / numeriDeiElementi 
    let totale = 0;
    const len = lista.length;

    for (let i=0; i < len; i++){
        const numero = lista[i];
        totale = totale + numero;
    }

    return totale / len;
}

const min = lista => 1;
const max = lista => 5;

const ris = media([8,5,8, 8, 3]);
console.log('media', ris);

const statistica = {
    media : media,
    max: max,
    min:min
}

const lista = [8,5,8, 8, 3];
const med =  statistica.media(lista);
console.log('statistica media', med);
// statistica.max(lista);

statica.
// console.log('totale', totale);



