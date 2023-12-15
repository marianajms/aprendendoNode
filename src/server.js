import express from 'express';
import userRouter from './routes/user.routes.js';
import blogRouter from './routes/blog.routes.js';

const app = express();
const porta = 3333;

app.use(express.json()); //para poder ler json
app.use('/user', userRouter); // Uso do roteador usersRouter como middleware
app.use('/blog',blogRouter);
app.use(express.static('public'))

app.set('view engine', 'ejs');


app.get('/',(req,res)=>{
  res.render('home.ejs');
})

app.listen(porta, (error) => {
  if (error) {
    console.log("Ocorreu um erro");
  } else {
    console.log(`Servidor ativado na porta ${porta}`);
  }
});
