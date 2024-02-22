import express from 'express';
import bodyParser from 'body-parser';
import connection from '../database/database.js';
import Pergunta from '../database/Pergunta.js'; //criar tabela

//2- importo e autenticação da Database
connection.authenticate()
.then(()=>{
   console.log('Conexão Realizada')})
.catch((erro)=>{
  console.log(erro)})

//Configurações do EJS e Express
const app = express();
const porta = 3333;

app.set('view engine', 'ejs');//habilita o ejs
app.use(bodyParser.urlencoded({extended: false})); //lidar com dados de formulario
app.use(express.json()); //para poder ler json em APIs
app.use(express.static('public'))//informa a pasta que o express deve usar para buscar arquivos estaticos

//Rotas// 5-SELECT * FROM perguntas e coloque no parâmetro "dadosTabela"
app.get('/', (req,res)=>{
  Pergunta.findAll({raw:true}) //SELECT * FROM perguntas
  .then(dadosTabela =>{
    res.render('index.ejs',{
      dadosTabela:dadosTabela
    })
  })
})

app.get('/perguntar',(req,res)=>{
  res.render('perguntar.ejs');
})


//4- INSERT INTO Perguntas(ttulo, descricao) VALUES(var titulo, var descricao)

app.post('/submit', (req,res)=>{
  var titulo = req.body.titulo;
  var descricao = req.body.descricao;
 Pergunta.create({  //envio dos dados a tabela 'INSERT'
   titulo : titulo,
   descricao : descricao,
 }).then(()=>res.redirect('/'));
  
})

app.listen(porta, (error) => {
  if (error) {
    console.log("Ocorreu um erro");
  } else {
    console.log(`Servidor ativado na porta ${porta}`);
  }
});
