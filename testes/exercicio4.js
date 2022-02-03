/**4) Dados o array pessoas = [
    {
        nome:"Natália",
        salario: 15000
    },
    {
        nome:"Sérgio Moura",
        salario: 13000
    },
    {
        nome:"Silvia",
        salario: 10000
    },
    {
        nome:"João",
        salario: 8000
    }
]
escreva o comando que retorna todas pessoas com salário maior que 8000.*/

const pessoas = [
    {
        nome:"Natália",
        salario: 15000
    },
    {
        nome:"Sérgio Moura",
        salario: 13000
    },
    {
        nome:"Silvia",
        salario: 10000
    },
    {
        nome:"João",
        salario: 8000
    }
]
const ehMaiorQue8000 = p => p > 8000 
const maioresSalarios = pessoas.filter(ehMaiorQue8000)
console.log(maioresSalarios)

