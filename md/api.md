# API Application Program Interface

Definiamo un punto tramite un oggetto che ci permette di racchiudere i valori x e y,
pittosto che definire due variabili separate x e y,

const punto ={
    x:0,
    y:0
}

ora voglio definire due funzioni che muoono un punto nel asse delle x e delle y.

Sefiniamo la funzione con i parametri

punto : il punto da spostare
distanza: di quanto si sposta, se negativo si sposta nella direzione opposta

punto per passare qualve distanza che può avere valore negativo per spostarsi verso sinistra o in alto

const movePunto = distanza =>
