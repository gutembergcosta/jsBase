'use-strict'

const express = require('express');
const bodyParser = require('body-parser');


let app = express();

app.listen(3000,function(req,res){
    console.log('oi')
})