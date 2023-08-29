const express = require('express');
const app = express();

app.get('/', (reg, res)=>(
    res.status(200).send({message: 'Olá mundo Im working'})
))

app.listen(3001, ()=>(
    console.log('Api rodando na porta 3001')
))