document.getElementById("botao").addEventListener ("click", codificar);
document.getElementById("botao2").addEventListener ("click", descodificar);

function codificar() {
  event.preventDefault();
  let frase1 = document.getElementById("primeiraFrase").value;
  let offset = Number (document.getElementById("numero").value);
  let bagaceira = window.cipher.encode (frase1, offset);
  document.getElementById("resolver").innerHTML = `${bagaceira}`; 
}

function descodificar() {
  event.preventDefault();
  let frase1 = document.getElementById("primeiraFrase").value;
  let offset = Number (document.getElementById("numero").value);
  let cansei = window.cipher.decode (frase1, offset);
  document.getElementById("result").innerHTML = `${cansei}`; 
}

// javascript pega no HTML com getElementById.value
// javascript faz alguma coisa com if
// javascript mostra resultado na tela com innerHTML
