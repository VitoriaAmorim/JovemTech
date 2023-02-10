const Sequelize = require('sequelize')

//Fazendo conexão com o banco de dados.
const sequelize = new Sequelize('jovemtech','root','1234',{
    host: 'localhost',
    dialect: 'mysql',
    query: {raw:true}
})

module.export = {
    Sequelize: Sequelize,
    sequelize: sequelize
}