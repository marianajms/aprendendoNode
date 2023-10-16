import Router from "express";
import express from "express";
const userRouter = express.Router();

userRouter.get('/',(req,res)=>{
  res.send('Página do usuário')
});

userRouter.post('/',(req,res)=>{
    const {name,email,password} = req.body;
    res.json({name});
  })

export default userRouter;