const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');
  db.collection('Users').findOneAndUpdate(
    {_id: new ObjectID('593becaf36c096369083dbff')},
    {$set:{name: 'Pavan_updated', sex: 'Male' },
     $inc:{age:1}},
     {returnOriginal: false}
).then((res)=>{
  console.log(res)
}, (err)=>{
  console.log(err)
})

  //db.close();


})
