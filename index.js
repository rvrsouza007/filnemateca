// const FilmesServices = require('./services/FilmesServices');

// console.log(FilmesServices.listar());

// importação da biblioteca express 
const express = require('express');
const res = require('express/lib/response');

// criando um servidor 
const servidor = express();

// criando as rotas do servidor 
servidor.get('/', (req, res)=>{
    console.log("alguem fez uma requisicao....");
    res.send("toma ai op que voce pediu...");
})
servidor.get('/filme' , (req,res)=>{
    res.send("fui no cinema assstir o novo homem aranha!!!")
})
servidor.get('/generos' , (req,res)=> {
    res.send("acao,drama,comedia,...");
})
servidor.get('/filmes/:posicao' ,(req,res)=>{
    let posicao = req.params.posicao;

    const filmes =require('./database/filmes.json');

    res.send(filmes[posicao])
})

servidor.get('/buscar/:titulo', (req,res)=>{
    res.send(req.params.titulo)
}) 

servidor.get('/busca/:trecho', (req, res)=>{
    let trecho = req.params.trecho;

    const filmes = require('./database/filmes.json');
    
    filmes.filter(trecho);
    
    res.send(filmes[trecho]);
    });

servidor.listen(3000);