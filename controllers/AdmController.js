module.exports = {
    mostraLogin:(req, res)=>{
        res.render('login',)
    },

    login:(req, res)=>{
        
        // 1 - Carregar o array de usuários
        const usuarios = require("../database/usuarios.json");
        
        // 2 - Capturar o email e a senha digitadas pelo visitante!
        let emailDigitado = req.body.email
        let senhaDigitada = req.body.senha 

        // 3 - Verificar se usuário é cadastrado!
        //     Procuro no array de usuários se existe
        //     algum com login e senha digitados
        let usuario = usuarios.find(
            u => {
                if(emailDigitado == u.email && senhaDigitada == u.senha){
                    return true;
                }else {
                    return false;
                }
            }
        );

        //     Caso exista, dar mensagem "Usuário inexistente!"
        // 4 - Caso não exista o usuário com email senha dados, retornar OK!
            if(usuario == undefined){
                res.send("Usuario Existe!")
            }else{
                res.send(`seja muito bem vindo, ${usuario.email}`)
            }
    },

    mostrarEsqueci: (req, res) => {
        res.render('esqueci.ejs')
    },

    lembrarSenha: (req, res) => {
        res.send(req.body);
    },


}
