let nome = "Raimundo";
let idade = 18;
let cnh = false;

if (idade >= 18 && cnh == true) {
  console.log(`${nome} está apto a dirigir`);
} else if (idade >= 18 && cnh == false) {
  console.log(`${nome} Precisa da CNH para dirigir`);
} else {
  console.log(`${nome} não está apto a dirigir`);
}
