const SHA256 = require('crypto-js/sha256');
const jwt = require('jsonwebtoken');

var data = {
  name: 'PavanKumar'
};
debugger;
var token = jwt.sign({id: 'pavan', exp: Math.floor(Date.now() / 1000) + (60 * 60)}, "namesecret");

console.log(token);

try {
  var decoded = jwt.verify(token, 'namesecret');
  console.log(decoded);
} catch(err) {
  console.log(err.message);
}

// var hash = SHA256("Message");
// console.log(hash.toString());
