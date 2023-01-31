const areaTexto = document.querySelector(".area-texto");
const mensaje = document.querySelector(".mensaje");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar() {
    comprobacion = /^[ a-z]+$/.test(areaTexto.value)
    if (comprobacion == true) {
        const textoEncriptado = encriptar(areaTexto.value);
        mensaje.value = "";
        mensaje.value = textoEncriptado;
        areaTexto.value = "";
        mensaje.style.backgroundImage = "none";
    }
    else {
        alert("Escribe solo letras minusculas y sin acentos")
    }
}

function encriptar(stringEncriptado) {
    let matrizRemplazo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < matrizRemplazo.length; i++) {
        if (stringEncriptado.includes(matrizRemplazo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizRemplazo[i][0], matrizRemplazo[i][1])
        }
    }
    return stringEncriptado
}

function btnDesencriptar() {
    comprobacion = /^[ a-z]+$/.test(areaTexto.value)
    if (comprobacion == true) {
        const textoDesencriptado = desencriptar(areaTexto.value);
        mensaje.value = textoDesencriptado;
        areaTexto.value = "";
        mensaje.style.backgroundImage = "none";
    }
    else {
        alert("Escribe solo letras minusculas y sin acentos")
    }
}

function desencriptar(stringDesencriptado) {
    let matrizRemplazo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let i = 0; i < matrizRemplazo.length; i++) {
        if (stringDesencriptado.includes(matrizRemplazo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizRemplazo[i][1], matrizRemplazo[i][0])
        }
    }
    return stringDesencriptado
}

function btnCopiar(){
  var textoCopiado = document.querySelector(".mensaje");
  if (mensaje.value != "") {
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(textoCopiado.value);
    alert("Se a copiado el texto \"" + textoCopiado.value + "\" a su portapapeles");
    mensaje.value = ""
  }
  else {
    alert("No hay texto para copiar")
  }
}