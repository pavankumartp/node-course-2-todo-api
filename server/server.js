// mongoose = require('mongoose');
//
// //Schema = mongoose.Schema;
//
// mongoose.Promise = global.Promise;
//
// mongoose.connect('mongodb://localhost:27017/users');

var express = require('express');
var bodyParser = require('body-parser');
var _ = require('lodash');

var {mongoose} = require('./db/mongoose');
var {User} = require('./models/user.js');
var {ObjectID} = require('mongodb');

var app = express();
const port = process.env.PORT||2500;

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

  app.get('/user', (req,res)=>{
    User.find().then((users)=>{
      debugger;
      res.send({users})
    },
    (e)=>{
      res.send(e).status(400)
    })
  })

  app.get('/user/:id', (req,res)=>{
    var id = req.params.id;
    if(!ObjectID.isValid(id)) return res.status(404).send();

    User.findById(id).then((doc)=>{if(!doc) return res.status(404).send();
      res.status(200).send({doc})},
      (err)=>{
        return res.status(400).send();
      });
    })

    app.delete('/user/:id', (req,res)=>{
      var id = req.params.id;
      if(!ObjectID.isValid(id)) return res.status(404).send();

      User.findByIdAndRemove(id).then((doc)=>{if(!doc) return res.status(404).send();
        res.status(200).send({doc})},
        (err)=>{
          return res.status(400).send();
        });
      })

  app.patch('/user/:id', (req, res)=>{
    var id = req.params.id;
    if(!ObjectID.isValid(id)) return res.status(404).send();

    var body = _.pick(req.body, ['name', 'location']);
    User.findByIdAndUpdate(id, {$set:body}, {new: true}).then((doc)=>{
      if(!doc){return res.status(404).send()}
        res.send({doc})
    }).catch((e)=>{
      res.status(404).send()
    })

  })


    app.listen(port,()=>{
      console.log(`server started on port ${port}`);
    })

    module.exports = {app};
