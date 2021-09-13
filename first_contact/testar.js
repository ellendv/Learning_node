const Sequelize = require('sequelize')
const sequelize = new Sequelize('sistemadecadastro','root','12345678',{
    host:"localhost",
    dialect:'mysql'
})
const Postagem = sequelize.define('postagens',{
    titulo: {
        type: Sequelize.STRING
    },
    conteudo:{
        type: Sequelize.TEXT
    }
})

Postagem.create({
    titulo:"é so um teste boy",
    conteudo:"qualquer"
})

const Usuario = sequelize.define('usuarios', {
    nome: {
        type:Sequelize.STRING
    },
    sobrenome:{
        type:Sequelize.STRING
    },
    idade:{
        type:Sequelize.INTEGER
    },
    email:{
        type:Sequelize.STRING
    }
})

Usuario.sync({force: true})