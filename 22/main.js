// forEach
let nomes = ["Maria", "José", "Marcos", "Matheus"];
nomes.forEach((nome) => {
  console.log("Meu nome é " + nome);
});

// Método includes
let carros = ["BMW", "FIAT", "RENAULT"];
if (carros.includes("BMW")) console.log("O carro BMW foi encontrado");

console.log(carros.includes("BMW"));
console.log(carros.includes("FORD"));

// Split separa uma string em arrays

let frase = "O rato roeu a roupa do rei de Roma";
let palavras = frase.split(" ");
console.log(palavras);

let frase2 = "O senhor é meu pastor é nada me faltará";
let palavras2 = frase2.split(" ");
for (let i = 0; i < palavras2.length; i++) {
  console.log(palavras2[i]);
}

//join transfoma o arrays em string
let frase1 = "meu email @ hotmail . com";
let email1 = frase1.split(" ").join("");

console.log(email1);

console.log("********");
const arr1 = [1, 2, 3, 4];
let qty = arr1.length;
console.log(qty);
let el = arr1[2];
console.log(el);

console.log("*********");

let arr = [0, 1, 2, 3, 4];
for (let i = 0; i < arr.length; i++) {


  console.log(arr[i]+5);
}

console.log("*********");

let arr2 = [];

for (let i = 0; i < 5; i++) {
  
  const elemento = i + 5;
  
  arr2.push(elemento);
}
console.log("Elementos do array:", arr2);

console.log("********1");
//Maior número em um array
let  number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//let max = Math.max(number)
//console.log(max)

function  findMaxNumber(number) {
    return Math.max.apply(null, number)
       
}

findMaxNumber(number);

function findMaxNumber(numeros) {
    let maiorNumero = numeros[0];
  
    for (const numero of numeros) {
        if (numero > maiorNumero) {
        maiorNumero = numero; 
      }
    }  
    
    return maiorNumero;
  } 
  
  const numeros1 = [5, 10, 2, 4, 1];
  const maiorNumero1 = findMaxNumber(numeros1);
  console.log("Maior número em [5, 10, 2, 4, 1]:", maiorNumero1)
  