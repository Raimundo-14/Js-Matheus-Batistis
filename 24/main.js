const calculadora = {
    soma: function(a,b) {
        return a + b;
    },
    subtrair: function(a,b) {
        return a - b;
    },
    multiplicação: function(a,b) {
        return a * b;
    },
    divisao: function(a,b) {
        return a / b;
    }
}

console.log(calculadora.soma(3,4));
console.log(calculadora.subtrair(10,4));
console.log(calculadora.multiplicação(3,4));
console.log(calculadora.divisao(8,4));
