var express = require('express');
var parser = require('body-parser');
var app = express();

app.use(parser,json());

app.post('/submit',function(){
    if(request.body.foo)response
});