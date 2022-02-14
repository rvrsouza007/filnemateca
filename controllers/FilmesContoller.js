const FilmesContoller = {
    index: (req, res)=>{
        console.log("alguem fez uma requisicao....");
        res.send("toma ai op que voce pediu...");
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
    
        res.send(filmes[posicao])
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