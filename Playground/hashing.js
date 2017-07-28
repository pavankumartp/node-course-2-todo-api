const SHA256 = require('crypto-js/sha256');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


// var data = {
//   name: 'PavanKumar'
// };
// debugger;
// var token = jwt.sign({id: 'pavan', exp: Math.floor(Date.now() / 1000) + (60 * 60)}, "namesecret");
//
// console.log(token);
//
// try {
//   var decoded = jwt.verify(token, 'namesecret');
//   console.log(decoded);
// } catch(err) {
//   console.log(err.message);
// }

var password = 'Pavan';
bcrypt.genSalt(10).then((salt)=>{
  bcrypt.hash(password,salt).then((hash)=>{
    console.log(hash);
  },(err)=>{
    console.log(err);
  })
}, (err)=>{
  consooe.log(err);
})


var hash = '$2a$10$r1WdOOAFBLr1XB4ullM/SO2zdI5sDSHYVmULG7s0cZ.sMsjVDOjFS';

bcrypt.compare(password, hash).then((res)=>{
  console.log(res)
},(err)=>{
  console.log('err1');
});

var password1 = 'pavan';
bcrypt.compare(password1, hash).then((res)=>{
  console.log(res)
},(err)=>{
  console.log('err2');
});

// var hash = SHA256("Message");
// console.log(hash.toString());
