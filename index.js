const express = require('express');
const path = require ('path');
const middlewareGlobal = require('./middleware/middlewareGlobal');
const session = require('express-session')

// Importandoos routers
const FilmesRouter = require("./routers/FilmesRouters")

const AdmRouter = require('./routers/AdmRouter')

//criando servidor
const servidor = express();

//config do tamplete engine
servidor.set('view engine', 'ejs');

//confg a pasta  public como cordenadora dos arquivos estaticos
servidor.use(express.static(path.join(__dirname, 'public')));



servidor.use(session({secret:"SEGREDO", saveUninitialized: false, resave: true}));

//põe as informacoes do usuario no req.body
servidor.use(express.urlencoded({ extended: false }));


servidor.use(middlewareGlobal)

//usando FilmesRouter 
servidor.use('/',FilmesRouter)
servidor.use('/',AdmRouter)


servidor.listen(3000);