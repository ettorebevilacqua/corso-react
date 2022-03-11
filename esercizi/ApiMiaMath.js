function Persona(num=0, nome =null, indirizzo='', cap='', tel=[], tipoCliente = 0){
    if (tipoCliente==100) return {nome, dataDismesso: new Data()};

    return {
        num,
        nome,
        indirizzo,
        cap,
        tel,
        tipoCliente
    }
}

function Navicella(){
    return {
        x:
    }
}

function creaPersona(elementoCorrente, i ){
    console.log('sono dentro a creaPersona il valore corrente passato da map è ', elementoCorrente)
    return new Persona(i, elementoCorrente);
}

const persone = ['rossi', 'bianchi', 'verdi'].map(creaPersona);

console.log(persone);