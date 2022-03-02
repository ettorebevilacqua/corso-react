let m=10;
function move(dir){
    document.getElementById("nav")
    const elem = document.getElementById("nav");
    const val = dir ? 10 : -10;
    elem.style.marginLeft = (parseInt((elem.style.marginLeft) || parseInt(window.getComputedStyle(elem).marginLeft))) + val + 'px';
}