import { DataTypes } from "sequelize";
import connection from "./database.js";

//3- CREATE TABLE perguntas(titulo VARCHAR(255), descricao TEXT);
const Pergunta = connection.define('perguntas',{

    titulo:{
        type:DataTypes.STRING,
        allowNull:false
    },

    descricao:{
        type:DataTypes.TEXT,
        allowNull:false
    }
})

Pergunta.sync({force:false}).then(()=> console.log('Tabela de Perguntas sincronizada'));

export default Pergunta;