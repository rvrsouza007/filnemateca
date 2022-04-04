// importar o express 
const express = require('express');
const AdmController = require('../controllers/AdmController');

// criando o roteador
const router = express.Router();

// criar a rota
router.get('/login',AdmController.mostraLogin);
router.post('/login',AdmController.login);

router.get('/esqueci',AdmController.mostrarEsqueci);
router.post('/esqueci',AdmController.lembrarSenha);

// exportar o roteador
module.exports = router ;