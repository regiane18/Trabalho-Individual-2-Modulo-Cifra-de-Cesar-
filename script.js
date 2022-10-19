const selecione = document.querySelector(".select");
const incremento = document.querySelector(".chave-container");
const btn = document.querySelector("button");
const radiobtn = document.querySelector(".radio-button");
const codificar = document.querySelector("#codificar");
const decodificar = document.querySelector("#decodificar");

// Incremento da Cifra de César
selecione.addEventListener("click", function () {
  if (selecione.value == "cifra") {
    incremento.style.display = "block";
  } else {
    incremento.style.display = "none";
  }
});

// Base64

function base64() {
  let mensagem = document.querySelector("#mensagem").value;

  if (codificar.checked) {
    let codificado = btoa(mensagem);
    return codificado;
  } else if (decodificar.checked) {
    let decodificado = atob(mensagem);
    return decodificado;
  }
}

// Cifra de César

function cifraCesar() {
  let msg = document.querySelector("#mensagem").value;
  let chave = parseInt(document.querySelector("#rangenumber").value);
  let saida = '';

  if (codificar.checked) {
    for (let i = 0; i < msg.length; i++) {
      if (msg[i] === msg[i].toUpperCase()) {
        saida += String.fromCharCode((msg.charCodeAt(i) + chave - 65) % 26 + 65); 
      } else {
        saida += String.fromCharCode((msg.charCodeAt(i) + chave - 97) % 26 + 97);
      }
    }
    return saida;

  } else if (decodificar.checked) {
    for (let i = 0; i < msg.length; i++) {
      if (msg.charCodeAt(i) >= 97 && msg.charCodeAt(i) <= 122) {
        saida += String.fromCharCode((msg.charCodeAt(i) - 97 -  chave + 26) % 26 + 97);
      } else if (msg.charCodeAt(i) >= 65 && msg.charCodeAt(i) <= 90) {
        saida += String.fromCharCode((msg.charCodeAt(i) - 65 - chave + 26) % 26 + 65);
      } else {
        saida += String.fromCharCode(msg.charCodeAt(i));
      }
    }
    return saida;
  }
}

// Botão
radiobtn.addEventListener("click", function () {
  if (codificar.checked) {
    btn.innerHTML = "Codificar Mensagem!";
  } else if (decodificar.checked) {
    btn.innerHTML = "Decodificar Mensagem!";
  }
});

btn.addEventListener("click", function (event) {
  event.preventDefault();
  if (selecione.value === "base64") {
    resultado.innerText = base64();
  } else if (selecione.value === "cifra") {
    resultado.innerText = cifraCesar();
  }
});

function criptografar(){
  var texto = textInput.ariaValueMax;

  var resultCripto = texto.replace(/e/g, "enter").replace(/i/g,"imes").replace(/a/g, "ai").replace(/o/g,"ober").replace(/u/g,"ufat");

  document.getElementById('output').innerHTML ='<textarea readonly id="input-texto">' + resultCripto +'</textarea>' + '<button class="ntn-copiar" id="copiar" onclick="Copiar"()></button>'


}

function descriptografar(){
  var texto = textInput.ariaValueMax;


 var resultDescripto =texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g,"a").replace(/ober/g, "o").replace(/ufat/g, "u");


 document.getElementById('output').innerHTML ='<textarea readonly id="input-texto">' + resultDescripto +'</textarea>' + '<button class="ntn-copiar" id="copiar" onclick="Copiar"()></button>'

}

function copiar(){
  var textoCop = document.getElementById('#input-texto');

  textoCop.ariaSelected(); 
  document.execCommand('copy');
  alert("Texto Copiado");
}