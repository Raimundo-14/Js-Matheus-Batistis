let num = 40;
let trueFalse = true;
let nome = "José"

function numero(){
    console.log(num);
}
numero(num);
console.log(`Esta função retorna um ${typeof(num)}`)

function verdadeOuFalso(){
    console.log(trueFalse);
}
verdadeOuFalso(trueFalse);
console.log(`Esta função retorna um ${typeof(trueFalse)}`)

function nomeString(){
    console.log(nome);
}
nomeString(nome);
console.log(`Esta função retorna uma ${typeof(nome)}`)

function verificar(dado) {
    if (typeof dado === 'string') {
        console.log('Este dado é do tipo String')
    }else if(typeof dado === 'number') {
        console.log('Este dado é do tipo Number')
    }else if(typeof dado === 'boolean') {
        console.log('Este dado é do tipo Boolean')
    }
    
   
    
}


verificar(23);
verificar('José');
verificar(true);