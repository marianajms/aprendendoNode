import express from 'express';
import userRouter from './routes/user.routes.js';
const app = express();
const porta = 3333;
app.use(express.json()); //para poder ler json

app.use('/user', userRouter); // Uso do roteador usersRouter como middleware

app.get('/blog/:artigo?',(req,res)=>{
  const {artigo} = req.params

  if(artigo){             
    res.send(`Mostrando a página ${artigo}`)
  }else{
    res.send('Página principal do blog');
  }
});

app.get('/home',(req,res)=>{
  const queryP = req.query["canal"];
  res.send(queryP);
})

app.listen(porta, (error) => {
  if (error) {
    console.log("Ocorreu um erro");
  } else {
    console.log(`Servidor ativado na porta ${porta}`);
  }
});
