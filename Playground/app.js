const express = require('express');
const expect = require('expect');

var app = express();
var text = {name:'Pavan'};

app.get('/user',(req,res)=>{
  res.status(200).json(text)
});
app.listen(2500, ()=>{
  console.log('listening at 2500');
})
debugger;
module.exports = {app};
