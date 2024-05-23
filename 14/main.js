//Função para deixar um número sempre positivo:

function numPositivo(num) {
    return Math.abs(num);
}

console.log(numPositivo(-5));


// Função tamanho do texto 


function tamanhoTexto(texto){
    let limite = texto.length;
    if(limite > 10) {
        
        console.log(texto)
        console.log("Texto muito longo");
        console.log(limite)
    }else { 
        console.log(texto)
        console.log("Texto adquado")
        console.log(limite)    
        
       
    }
}

tamanhoTexto("meu nome e Raimundo")
tamanhoTexto("Raimundo")

//Operador exponencial 

function potencia(a, b) {
    console.log(a ** b);
}

potencia(3, 2)

function expoente(a, b) {
    return Math.pow(a, b);
}

console.log(expoente(2,2));
console.log(expoente(2,3));
console.log(expoente(5,2));