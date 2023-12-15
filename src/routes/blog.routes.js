import express from "express";
const blogRouter = express.Router();


blogRouter.get('/:artigo?',(req,res)=>{
    const {artigo} = req.params
  
    if(artigo){             
      res.send(`Mostrando a página ${artigo}`)
    }else{
      res.send('Página principal do blog');
    }
  });

export default blogRouter;

