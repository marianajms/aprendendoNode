import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const porta = 3333;

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json()); //para poder ler json
app.use(express.static('public'))

app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
  res.render('index.ejs')
})

app.get('/perguntar',(req,res)=>{
  res.render('perguntar.ejs');
})

app.post('/submit', (req,res)=>{
  var titulo = req.body.titulo;
  res.send('Formulário Recebido'+titulo);
})

app.listen(porta, (error) => {
  if (error) {
    console.log("Ocorreu um erro");
  } else {
    console.log(`Servidor ativado na porta ${porta}`);
  }
});
