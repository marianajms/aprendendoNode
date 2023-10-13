import Router from "express";
import express from "express";
const userRouter = express.Router();

userRouter.get('/user',(req,res)=>{
  res.send('Página do usuário')
});

userRouter.post('/user',(req,res)=>{
    const {name,email,password} = req.body;
    res.json({name});
  })

export default userRouter;