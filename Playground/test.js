var {ObjectID} = require('mongodb');
var users = [
  {
    _id: new ObjectID(),
    name: 'Pavan1',
    email: 'pavan.kumar@sap.com',
    age: 40,
    location: 'Bengaluru'
  },
  {
    _id: new ObjectID(),
    name: 'Pavan2',
    email: 'pavan.kumar@sap.com',
    age: 40,
    location: 'Bengaluru'
  }
 ]

var

var path = `/user/{users[0].name}`;
console.log(path);
