import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const porta = 3333;

app.use(bodyParser.json());

app.get('/message/:id/:user',(request,response)=>{
   const {id,user} = request.params; // desestruturação

   response.send(`Uau! Você solicitou informações do usuário ${id}, que está registrado com o nome de usuário: ${user}`);
});

app.get('/produtos',(req,res)=>{
    const {categoria,filtro} = req.query;
    res.send(`A categoria selecionada foi: ${categoria}`)

})

app.get('/',(req,res)=>{
    res.send("Respondendo a uma requisição")  
})

app.post('/',(req,res)=>{
  res.send(req.body)
})

app.listen(porta,()=> console.log(`servidor ativado na porta ${porta}`));





