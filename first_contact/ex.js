const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const Sequelize = require('sequelize')

//config
    //template engine
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')


//conexâo com o banco de dados my sql

const sequelize = new Sequelize('sistemadecadastro','root','12345678',{
    host:"localhost",
    dialect:'mysql'
})
//rotas
app.get('/cad', function(req, res){
    res.render('formulario')
})


app.listen(8081, function(){
    console.log("serivor está rodando");
});  