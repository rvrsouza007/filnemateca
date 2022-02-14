const express = require('express');

// Importandoos routers
const FilmesRouter = require("./routers/FilmesRouters")

//criando servidor
const servidor = express();

//usando FilmesRouter 
servidor.use('/',FilmesRouter)


servidor.listen(3000);