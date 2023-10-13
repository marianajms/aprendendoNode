import express from 'express';
import userRouter from './routes/user.routes.js';
const app = express();
const porta = 3333;
app.use(express.json()); //para poder ler json

app.use('/user', userRouter); // Uso do roteador usersRouter como middleware

app.get('/',(req,res)=>{
  res.send('Página do usuário');
});

app.listen(porta, (error) => {
  if (error) {
    console.log("Ocorreu um erro");
  } else {
    console.log(`Servidor ativado na porta ${porta}`);
  }
});
