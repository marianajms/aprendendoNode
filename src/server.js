import express from 'express';

const app = express();

const porta = 3333;

app.get('/message/:id/:user',(request,response)=>{
   const {id,user} = request.params; // desestruturação

   response.send(`Uau! Você solicitou informações do usuário ${id}, que está registrado com o nome de usuário: ${user}`);
});



app.get('/',(request,response)=>{
    response.send("Respondendo a uma requisição")  
})

app.listen(porta,()=> console.log(`servidor ativado na porta ${porta}`));





