const express = require('express');
const path = require ('path');
const middlewareGlobal = require('./middleware/middlewareGlobal');

// Importandoos routers
const FilmesRouter = require("./routers/FilmesRouters")

//criando servidor
const servidor = express();

//config do tamplete engine
servidor.set('view engine', 'ejs');

//confg a pasta  public como cordenadora dos arquivos estaticos
servidor.use(express.static(path.join(__dirname, 'public')));

servidor.use(middlewareGlobal)

//usando FilmesRouter 
servidor.use('/',FilmesRouter)


servidor.listen(3000);