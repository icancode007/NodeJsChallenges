var express = require('express');

var app = express();

app.get(['/apple','/ale'],function(request,response){
    response.send('Apple or Ale');
});

app.get('/who+a+',function(request,response){
    response.send('I Know Right')
});

app.get('/hello',function(request,response){
    response.json({querystring_firstname:request.query.firstname,
        querystring_lastname:request.query.lastname    
    });
});
app.listen(3000,function(){
    console.log('Example app listening on port 3000!');
});