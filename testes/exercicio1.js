/**1) Dados o array numerosDasCasas = [5,10,20,23,34], escreva o comando que retorna o
array somente com os pares;*/

/**const ehPar =(n) =>{
    if(n % 2 == 0) {
        return true
    }else{
        return false
    }
}; 

console.log(ehPar(15));*/

const numerosDasCasas = [5,10,20,23,34];
const ehPar = n => n % 2 == 0;
const casasPares = numerosDasCasas.filter(ehPar)
console.log(casasPares);
