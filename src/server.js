import express from 'express';
import bodyParser from 'body-parser';
import connection from '../database/database.js';
import Pergunta from '../database/Pergunta.js'; //criar tabela de perguntas
import Resposta from '../database/Resposta.js'; //criar tabela de respostas

//Configurações do EJS e Express
const app = express();
const porta = 3333;

app.set('view engine', 'ejs');//habilita o ejs
app.use(bodyParser.urlencoded({extended: false})); //lidar com dados de formulario
app.use(express.json()); //para poder ler json em APIs
app.use(express.static('public'))//informa a pasta que o express deve usar para buscar arquivos estaticos

//2- importo e autenticação da Database
connection.authenticate()
.then(()=>{
   console.log('Conexão Realizada')})
.catch((erro)=>{
  console.log(erro)})

app.listen(porta, (error) => {
  if (error) {
    console.log("Ocorreu um erro");
  } else {
      console.log(`Servidor ativado na porta ${porta}`);
  }
});  

//Rotas// 5-SELECT * FROM perguntas ORDER BY id DESC; e coloque no parâmetro "dadosTabela"
app.get('/', (req,res)=>{
  Pergunta.findAll({
    raw:true,
    order:[['id','DESC']]
  }) 
  .then(dadosTabela =>{
    res.render('index.ejs',{
      dadosTabela:dadosTabela
    })
  }).catch(error => console.log('Erro ao buscar perguntas',error))
})

app.get('/perguntar',(req,res)=>{
  res.render('perguntar.ejs');
})

//6 - SELECT * FROM perguntas WHERE id(campo) = id(variável da rota) e envie para a página perguntaID
app.get('/pergunta/:id', (req, res) => {
  const id = req.params.id;

  Pergunta.findOne({ where: { id: id }})
    .then(resultado => {
      if (resultado != undefined) {
        Resposta.findAll({ where: { IdPergunta: id }, raw: true })
        .then((respostas) => {
          if (respostas != undefined) {
            res.render('perguntaID', { dados: resultado,respostas: respostas });
          } else {
            res.render('perguntaID', { dados: resultado});
            }
          });
        } else {
          res.redirect('/');
        }
    });

});


//4- INSERT INTO Perguntas(titulo, descricao) VALUES(var titulo, var descricao)
app.post('/submit', (req,res)=>{
  var titulo = req.body.titulo;
  var descricao = req.body.descricao;
 Pergunta.create({ 
   titulo : titulo,
   descricao : descricao,
 }).then(()=>res.redirect('/'));
  
})


app.post('/submitResposta',(req,res)=>{
  var textoResposta = req.body.textoResposta;
  const IdPergunta = req.body.id;
  console.log(textoResposta,IdPergunta)
  Resposta.create({ 
    textoResposta:textoResposta,
    IdPergunta:IdPergunta
  }).then(()=>res.redirect('/pergunta/'+IdPergunta));
})

