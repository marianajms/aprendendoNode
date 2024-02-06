import { DataTypes } from "sequelize";
import connection from "./database.js";

//criação de uma tabela{pergunta} com os camopos{titulo e descrição}
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

Pergunta.sync({force:false})
.then(()=> console.log('tabela criada'));

export default Pergunta;