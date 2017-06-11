var ops = { name: 'Pavan1',
  age: '40',
  location: 'Bengaluru',
  _id:
   { _bsontype: 'ObjectID',
     id:
      { '0': 89,
        '1': 61,
        '2': 32,
        '3': 67,
        '4': 242,
        '5': 239,
        '6': 60,
        '7': 22,
        '8': 164,
        '9': 59,
        '10': 255,
        '11': 168 } } }

//var timestamp = ops._id.getTimestamp();
console.log(typeof ops._id);
