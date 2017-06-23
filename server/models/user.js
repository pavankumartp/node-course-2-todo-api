var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var User = mongoose.model('users',{
  name:{
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  email:{
    type:String,
    required: true,
    minlength: 1,
    trim: true
  },
  age:{
    type: Number
  },
  location:{
    type: String
  },
  changedOn:{
    type: Date
  }
});

// var user = new user({
//   name: 'a',
//   email: 'a',
//   age: 20,
//   location:'location'
// });
// //
//  debugger;
// //
//  user.save().then(
//   (doc)=>{
//     debugger;
//    console.log(doc)
//   },
//   (e)=>{
//     debugger;
//     console.log(e);
//   })

module.exports = {User};

// var newUser = new user({
//   name: 'Pavan', age: 40, email: ' pavan.kumar@sap.com ', location: 'Bengaluru', changedOn: '20170613'
// });
//
// newUser.save().then((doc)=>{
//   console.log(doc)
// },
// (e)=>{
//   console.log(e)
// });
