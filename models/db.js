const Sequelize = require('sequelize')

//Fazendo conexão com o banco de dados.
const sequelize = new Sequelize('favelaware','root','root',{
    host: "localhost",
    dialect: 'mysql',
    query: {raw:true}
})

module.export = {
    Sequelize: Sequelize,
    sequelize:sequelize
}