const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');
  db.collection('Users').insertOne(
    {name: 'Pavan1',
    age: '40',
    location: 'Bengaluru'},
    (err, result)=>{
      if(err){
     return console.log('Unable to insert record in users DB', err)
     }
     debugger;
     var {_id} = result.ops[0];
     console.log(typeof _id);
  })

  db.close();


})
