const express =  require('express');

var app = express();

app.get('/',(req,res)=>{
  res.status(404).send({
    error:'page not found',
    name :'sample todo name'
  });
});

app.listen(3000);
module.exports.app = app;
