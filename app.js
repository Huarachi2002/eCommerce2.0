const express = require('express');
const {request,response} = require('express');
const app = express()

app.get('/',(req=request,res=response) => {
    res.send('Hola Mundo');
});

app.listen(3000);