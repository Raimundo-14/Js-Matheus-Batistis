function string(text) {
    let textString = text.split("");
    return textString
}

console.log(string("Raimundo"));

function strings(text) {
    // tem que usar o Split para separar + o reverse p/ reverter é o join para juntar 
    let textString = text.split("").reverse().join("");
    return textString
}

console.log(strings("Raimundo"));


//Contador de letras


function countVowels(texto) {  
  const textoMinúsculo = texto.toLowerCase();
  const vogal = "o"
  let contagemVogal = 0;

  for (const letra of textoMinúsculo) {
    if (vogal ===letra) {
      contagemVogal++; 
    }
  }  
  return contagemVogal;0
}
console.log(countVowels("Olá, mundo!"));
console.log(countVowels("Este é um texto com várias vogais.")); 
console.log(countVowels("Abacaxi")); 
