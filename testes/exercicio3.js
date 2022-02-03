/**3) Dados o array nomes = ["Mateus", "Rhuan", "Ryee", "Gustavo", "Luiz"], escreva o comando que retorna um array somente com nomes com mais de 5 caracteres.*/

const nomes = ["Mateus", "Rhuan", "Ryee", "Gustavo", "Luiz"];
const temMaisDeCincoLetras = n => n.length > 5
const cincoLetras = nomes.filter(temMaisDeCincoLetras)
console.log(cincoLetras)