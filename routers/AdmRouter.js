// importar o express 
const express = require('express');
const AdmController = require('../controllers/AdmController');
const verificaSeEstaLogado = require('../middleware/verificaSeEstaLogado');

// criando o roteador
const router = express.Router();

// criar a rota
router.get('/login',AdmController.mostraLogin);
router.post('/login',AdmController.login);

router.get('/esqueci',AdmController.mostraEsqueci);
router.post('/esqueci',AdmController.lembrarSenha);

router.get('/admin',verificaSeEstaLogado,AdmController.mostraAdmin)

// exportar o roteador
module.exports = router ; 