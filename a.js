// fare funzionare il left, e l' up
let posizioneUp = 150;
let posizioneLeft = 70; // attenzione alle variabili undefinded
function move(dir) {
  const elem = document.getElementById("nav");

  // se definisco qui posizione left , ogni volta che viene premuto il pulsante
  // posizioneLeft torna alla posizione 70, viene aumentata di 10
  // ma al click succesivo ritorna al valore 70, si muove di 10
  // quindi vedo che fa sempre lo stesso scatto di 10px

  // decomentare per vedere l'errore
  //  let posizioneLeft = 70; // attenzione alle variabili undefinded

  // uso left e up, come variabili di quanto aumentare o diminuire

  let left = 0; // attenzione left ha valore undefined
  let up = 0; // attenzione up ha valore undefined

  if (dir === 0) {
    left = 10;
  } else if (dir === 1) {
    left = -10;
  } else if (dir === 2) {
    up = -10;
  } else {
    up = 10;
  }

  // la if di prima ma scritta abbreviato
  //const val = dir === 0 ? 10 : -10;

  // visualizzo il valore posizioneLeft per vedere se sta funzionando
  console.log("posizioneLeft prima della modifica ", posizioneLeft);

  // la nuova posizione è quella precedente + o - il valore di left
  posizioneLeft = posizioneLeft + left;
  posizioneUp = posizioneUp + up;

  console.log("posizioneLeft dopo la modifica", posizioneLeft);

  elem.style.marginLeft = posizioneLeft + "px";
  elem.style.marginTop = posizioneUp + "px";
}
