import express from "express";
const userRouter = express.Router();

//Rota da página principal
var categorias = ["celulares","televisores"];

userRouter.get('/',(req,res)=>{
  res.render('home.ejs');
});

userRouter.post('/',(req,res)=>{
    const {name,email,password} = req.body;
    res.json({name});
  })

export default userRouter;