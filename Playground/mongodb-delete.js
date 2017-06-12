const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');
  db.collection('Users').findOneAndDelete({name:'Pavan1'},{age:40}).then((res)=>{
    console.log(res);
  })

  //db.close();


})
