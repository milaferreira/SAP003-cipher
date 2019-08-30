window.cipher = {
  encode: encode,
  decode: decode,
};

function encode(texto, codificar) {
  let resolver = "";
  for (let i=0; i<texto.length; i++) 
    if (texto[i].charCodeAt() == 32) {
      resolver += " ";
    }
    else if (texto[i].charCodeAt() >= 65 && texto[i].charCodeAt() <= 90) {
      (resolver += String.fromCharCode(((texto[i].charCodeAt()-65 + codificar) %26) + 65));
    } 
    else if (texto[i].charCodeAt() >= 97 && texto[i].charCodeAt() <= 122) {
      (resolver += String.fromCharCode(((texto[i].charCodeAt()-97 + codificar) %26) + 97));
    } 
  return resolver;
}

function decode(codificado, descodificar) {
  let result = "";
  for (let i=0; i<codificado.length; i++) 
    if (codificado[i].charCodeAt() == 32) {  
      result += " ";
    } else if (codificado[i].charCodeAt() >= 65 && codificado[i].charCodeAt() <= 90) {   
      (result += String.fromCharCode(((codificado[i].charCodeAt()+65 - descodificar + 26) %26) + 65));
    } else if (codificado[i].charCodeAt() >= 97 && codificado[i].charCodeAt() <= 122) {
      (result += String.fromCharCode(((codificado[i].charCodeAt()+97 - descodificar + 26) %26) + 97));
    }
  return result;
}