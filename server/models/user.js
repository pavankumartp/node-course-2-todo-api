var mongoose = require('mongoose');
var validator = require('validator');
var jwt = require('jsonwebtoken');
var _ = require('lodash');
var bcrypt = require('bcryptjs');


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
  var token = jwt.sign({id:user._id.toString(), access}, process.env.JWT_SECRET); //ES6 syntax for access:access
  debugger;

  user.tokens.push({access, token});  //ES6 syntax for {access:access, token:token}
  return user.save().then(()=>{
    return token;
  })

}

UserSchema.statics.findByToken = function(token){
  var User = this;

  try{
    var decoded = jwt.verify(token, process.env.JWT_SECRET);
  }catch(e){
    return Promise.reject('Un-authorized');
  }
  debugger;
  return User.findOne({
    '_id': decoded.id,
    'tokens.token': token,
    'tokens.access': 'auth'
  })
}

UserSchema.statics.findByCredentials = function(email, password){
  return User.findOne({email}).then((user)=>{
    if(!user) {return Promise.reject()}

  return new Promise((resolve, reject)=>{
    bcrypt.compare(password, user.password).then((result)=>{
      debugger;
        debugger;
        if(result){
          resolve(user)}
          else{
            reject();
          }
        })
      })
    })
  }

  UserSchema.pre('save',function(next){
    debugger;
    var user = this;
    if (user.isModified('password')){
      bcrypt.genSalt(10).then((salt)=>{
        bcrypt.hash(user.password,salt).then((hash)=>{
          user.password = hash;
          debugger;
          next();
        })
      }).catch((e)=>{
        next(e);
      })
    }
    else {
      debugger;
      next() };
    });


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
