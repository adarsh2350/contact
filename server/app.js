const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const app = express();

dotenv.config({path:"./config.env"})
require("./db/conn")
const user = require('./model/userSchema')
app.use(express.json())
app.use(require("./router/auth"))

 
const PORT = process.env.PORT

const middleWare = (req,res,next)=>{
    console.log('middleware');
    next();
}



app.get('/about',middleWare,(req,res)=>{
    res.send('this is about')
});

app.get('/contact',(req,res)=>{
    res.send('this is contact')
});

app.get('/signup',(req,res)=>{
    res.send('this is signup')
});

app.get('*',(req,res)=>{
    res.send('404 error')
});

app.listen(PORT,'127.0.0.1',()=>{console.log('listening')});