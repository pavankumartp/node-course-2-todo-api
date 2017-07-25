var {User} = require('./../models/user.js');

var authenticate = (req,res,next)=>{
  var token = req.header('x-token');
  User.findByToken(token).then((user)=>{
       if(!user){
          return Promise.reject('this time no user found');
       }
       debugger;
    req.user = user;
    req.token = token;
    next();
  }).catch((e)=>{
    res.header('WWW-Authenticate', "realm=Test")
    res.status(401).send(e);
  });
}

module.exports = {authenticate};
