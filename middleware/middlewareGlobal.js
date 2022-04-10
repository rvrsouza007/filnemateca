module.exports = (req, res, next) => {
    let data = new Date();
    let hora = data.getHours();

    if (hora < 01 || hora > 24){
        res.send ("ja ta tarde ... va para casa!")
    } else {
        console.log("A requisição está indo...");
        next();
        console.log("A resposta está voltando...");
    }
}