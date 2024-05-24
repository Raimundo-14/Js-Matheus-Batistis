function faixaEtaria(idade){
    if (idade < 12) {
        console.log("Pedrinho é uma criança de " + idade + " anos")
    }else if(idade >= 12 && idade < 24) {
        console.log("Jovem")
    }else{
        console.log("José é um adulto de " + idade + " anos")
    }
}
let crianca = (faixaEtaria(9));
let adulto = (faixaEtaria(25)) 

// Palindrome

function isPalindrome(text) {
    const palavraSemEspaço = text.toLowerCase().replace();
    const palavrReverse = palavraSemEspaço.split("").reverse().join("");
    if (palavraSemEspaço === palavrReverse) {
        return true;
    }else {
        return false;
    }
    
}
console.log(isPalindrome("radar"))
console.log(isPalindrome("hello"))