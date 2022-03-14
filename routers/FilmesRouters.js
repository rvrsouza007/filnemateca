// importar a biblioteca  express
const  express  = require("express");

const middlewareGuardarBusca = require("../middleware/middlewareGuardarBusca");
// importar a FilmesController
const FilmesController = require('../controllers/FilmesContoller')

// criar o rotiador com .express.router
const router =express.Router();

// criando as rotas do router 
router.get('/',FilmesController.index)
// função listarFilmes
router.get('/filme',FilmesController.listar )
// função porGeneros
router.get('/generos',FilmesController.generos)
// função pelaPosição
router.get('/filmes/:id',FilmesController.id)
// função peloTitulo
router.get('/buscar/:titulo',FilmesController.titulo)
// função buscarPorTrecho
router.get('/busca',middlewareGuardarBusca,FilmesController.trecho);

//criar uma rota "/teste" respondendo oi!
router.get('/teste', (req, res)=>{
    res.send("oi sumido!")
})
// eexportar o router 
module.exports = router;