import express from 'express'; // ou const express = require('express')
const app = express();

const porta = 3333;

app.listen(porta, ()=> console.log('servidor carregado'));

