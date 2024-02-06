import { Sequelize } from "sequelize";

//criação de um banco de dados
const connection = new Sequelize('guiaDePerguntas','root','oliviaguta',{
    host:'localhost',
    dialect:'mysql'
});

export default connection;

