require('dotenv').config();
const express = require('express')

const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.get('/twitter',(req,res)=>{
    res.send('sohamgite29')
})
app.get('/login',(req,res)=>{
    res.send('<h1>Please Login at ChaiaurCode</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send('<h1>Welcome to ChaiaurCode</h1>')
})
app.listen(process.env.PORT,()=>{
    console.log(`App running at port ${port}`);
})