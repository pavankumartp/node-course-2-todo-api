// mongoose = require('mongoose');
//
// //Schema = mongoose.Schema;
//
// mongoose.Promise = global.Promise;
//
// mongoose.connect('mongodb://localhost:27017/users');

var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {User} = require('./models/user.js');
var app = express();
app.use(bodyParser.json());

app.post('/user', (req,res)=>{
  debugger;
 var user = new User({
   name: req.body.name,
   email: req.body.email,
   age: req.body.age,
   location:req.body.location
 });

 debugger;

 user.save().then(
   (doc)=>{
    res.send(doc)
   },
   (e)=>{
     res.status(400).send(e);
   })
});

// app.get('/user', (req,res)=>{
//   debugger;
//   res.send('great');
// });


app.listen(2500,()=>{
  console.log('server started on port 2500');
})

module.exports = {app};