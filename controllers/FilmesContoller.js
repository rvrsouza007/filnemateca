const FilmesContoller = {
    index: (req, res)=>{
        //carregar todos os filmes
        const filmes = require('../database/filmes.json');
        //renderizar a view  index.ejs
        res.render('index.ejs',{filmes})
    },
    listar:(req,res)=>{
        res.send("fui no cinema assstir o novo homem aranha!!!")
    },
    generos:(req,res)=> {
        res.send("acao,drama,comedia,...");
    },
    posicao:(req,res)=>{
        let posicao = req.params.posicao;
    
        const filmes =require('../database/filmes.json');
        
        let filme =filmes[posicao];
        res.render('filme.ejs', {filme})
    },
    titulo:(req,res)=>{
        res.send(req.params.titulo)
    },
    trecho:(req, res)=>{
        let trecho = req.params.trecho;

        console.log("foi feita uma requisicao")

        const filmes = require('../database/filmes.json')
        let filtrador = filme =>{
            
            return filme.titulo.includes(trecho);
        }

        let nomeDoFilme = filmes.filter(filtrador);
        
        res.send(nomeDoFilme);
    },
};
module.exports = FilmesContoller;
