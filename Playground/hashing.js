const SHA256 = require('crypto-js/sha256');
const jwt = require('jsonwebtoken');

var data = {
  name: 'PavanKumar'
};

var token = jwt.sign({data, exp: Math.floor(Date.now() / 1000) + (0.000001)}, "namesecret");

console.log(token);

try {
  var decoded = jwt.verify(token, 'namesecret');
  console.log(decoded);
} catch(err) {
  console.log(err.message);
}

// var hash = SHA256("Message");
// console.log(hash.toString());
