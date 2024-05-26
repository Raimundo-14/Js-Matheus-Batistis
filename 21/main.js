let arrs1 = [0, 1, 2, 3, 4, 5];
let arrs2 = [6, 7, 8, 9];

function arrsLength(arr) {
  if (arr.length >= 5) {
    console.log("Muitos elementos");
  } else {
    console.log("Poucos elementos");
  }
}
arrsLength(arrs1);
arrsLength(arrs2);

let nomes = ["José", "Maria", "João", "Pedro"];

for (let i = 0; i < nomes.length; i++) {
  console.log("Meu nome é " + nomes[i]);
}

let carros = ["Corsa", "Duster", "Focus", "S-10", "Amarok", "Ram - 2500"];
for (let i = 0; i < carros.length; i++) {
  console.log(carros[i]);
}

//remoção de elementos
//pop => remove o ultimo elemento e o push adiciona um elemento em ultimo na lista

let nomes1 = ["José", "Maria", "João", "Pedro", "Francisco"];
console.log(nomes1);

let nomeRemovido = nomes1.pop();
console.log(nomeRemovido);
console.log(nomes1);

nomes1.push("Paola");
console.log(nomes1);

//adicionando elementos
// shift => remove um elemento no index 0 do array
// unshift => adiciona um elemento no index 0 do array

let frutas = ["Abacaxi", "Mamão", "Laranja"];
console.log(frutas);
frutas.shift();//removendo 
console.log(frutas);
frutas.unshift("Uva"); //adicionando
console.log(frutas);

// slice recorta um index do inicio ao fim do parametro

let nums3 = [0,1,2,3,4,5,6,7,8,9]
console.log(nums3.slice(4,6))// retorna o index 4 e 5
console.log(nums3.slice(2)) // retorna do 2 em diante
console.log(nums3.slice(-2)) // reverte o array, começando de trás pra frente 