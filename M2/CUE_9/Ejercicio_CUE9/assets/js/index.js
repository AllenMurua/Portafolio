var selectParrafo = document.getElementsByTagName("P");
var selectImagen = document.getElementById("img");
var selectCaja2 = document.getElementById("caja2");
var selectTxt1= document.getElementById("text1");
var selectTxt2= document.getElementById("text2");
function cambiarParrafo(x) {
    x.style.display = "inline";
    selectTxt2.style.display = "none";
}
function aparecertxt2(x) {
    x.style.display = "inline";
    selectTxt2.style.display = "inline";
}
function cambiarImagen(x) {
    selectImagen.style.height = "100%";
    
    selectImagen.style.width = "100%";
}
function imgNormal(x) {
    selectImagen.style.height = "121px";
    selectImagen.style.width = "187px";
}
