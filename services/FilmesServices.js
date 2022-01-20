const filmes = require('../database/filmes.json');
const uniqid = require('uniqid');
const fs = require('fs');

const services = {
    listar: function(){
        return filmes;
    },
    getTitulos: function(){
        let titulos = [];
        for(f of filmes){
            
            titulos.push(f.titulo);
        }
        return titulos;
    }
    ,
    creat: function(cartaz, titulo, censura, trailer, generos){
        //1 criar um id para o novo filme 
        let id = uniqid();

        //2 criar um obj literal com as informacoes do novo filme
        let noveFilme = {
            id, cartaz, titulo, censura, trailer, generos
        }
        
        //3 add esse obj criado ao array de filmes
        filmes.push(noveFilme);

        //4 salvar o conteudo do array filmes no arquivo filmes.json
        fs.writFileSync(
            __dirname+'/../database/filmes.json',
            JSON.stringify(novoFilme)
            )

    },
    apagar: function(){},
    editar: function(){},
    
};

services.create(
    "Miranha.jpg",
    "Homem Aranha: Sem Volta para Casa",
    10,
    "http://youy",
    "Sinopse do filme que dizem que é bom",
    ["Ação", "Ficção", "Comédia"]
)

//module.exports = services;