function calculateAverage(num){
    if (num.length === 0) {
        return 0;
    }

    let sum = 0;
    let average = 0;

    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    } average = sum / num.length;
    return average;

}

  const notasAluno = [10, 8, 7, 9, 5];
  const mediaNota = calculateAverage(notasAluno);
  console.log("Média das notas dos alunos:", mediaNota);


function calculateAverage(numeros) {
    
    if (numeros.length === 0) {
        return 0;      
    }  
    
    let soma = 0;
    for (const numero of numeros) {
      if (typeof numero !== "number") {
        throw new Error("O array deve conter apenas números.");
      }
      soma += numero;
    }  
    
    const media = soma / numeros.length; 
   
    return media;
  }
  
  const dadosFinanceiros = [1500, 800, 2200, 550];
  const mediaFinanceira = calculateAverage(dadosFinanceiros);
  console.log("Média dos dados financeiros:", mediaFinanceira); 