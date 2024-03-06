import { DataTypes } from "sequelize";
import connection from "./database.js";

const Resposta = connection.define('respostas',{
    textoResposta:{
        type:DataTypes.TEXT,
        allowNull:false
    },

    IdPergunta:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
})

Resposta.sync({force:false}).then(()=>console.log('Tabela de Respostas sincronizada'));

export default Resposta;