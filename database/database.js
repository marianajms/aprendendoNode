import { Sequelize } from "sequelize";

//1- CREATE DATABASE guiaDePerguntas
const connection = new Sequelize('guiaDePerguntas','root','oliviaguta',{
    host:'localhost',
    dialect:'mysql'
});

export default connection;

