var mongoose = require('mongoose');
var validator = require('validator');
var jwt = require('jsonwebtoken');
var _ = require('lodash');

var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var UserSchema = new Schema({
  email:{
    type:String,
    required: true,
    minlength: 1,
    trim: true,
    unique: true,
    validate:{
      validator:(v)=>{
        return validator.isEmail(v);
      },
      message: '{VALUE} is not a valid email address'
    }
  },
  password:{
    type: String,
    required: true,
    minlength: 6
  },
  tokens:[{
    access:{
      type:String,
      required:true
    },
    token:{
      type:String,
      required:true
    }
  }]
});

UserSchema.methods.toJSON = function(){
  var user = this;
  var userObject = user.toObject();
  return _.pick(userObject,['_id', 'email']);
}

UserSchema.methods.generateAuthToken = function(){
  var user = this;
  var access = 'auth';
  var token = jwt.sign({id:user._id.toString(), access}, "secret"); //ES6 syntax for access:access
  debugger;

  user.tokens.push({access, token});  //ES6 syntax for {access:access, token:token}
  return user.save().then(()=>{
    return token;
  })

}



var User = mongoose.model('User', UserSchema );
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
