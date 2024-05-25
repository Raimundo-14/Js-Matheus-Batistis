// criar um objeto ônibus
// rodas =8, limite passageiro = 8, portas = 2

let onibus = {
  rodas: 8,
  passageiros: 40,
  portas: 2,
};

console.log(onibus.rodas);
console.log(onibus.passageiros);
console.log(onibus.portas);
//adicionar propriedades janelas = 20; Deletar a propriedade rodas

delete onibus.rodas;
onibus.janelas = 20;
onibus.retrovisor = 2;
onibus.poltronas = 42;
onibus.steps = 2;

console.log(onibus.janelas);
console.log(onibus);

// Criar um array com 5 nomes, verificar algum nome existe, if imprima no console com uma msg

let nomes = ["Pedro", "Raimundo", "Maria", "José", "Talitha"];
if (nomes.includes("José")) {
  console.log("Seja bem vindo " + nomes[3]);
} else {
  console.log("Seja bem vindo");
}

