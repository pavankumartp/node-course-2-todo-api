mongoose = require('mongoose');

//Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/users');

module.exports = {mongoose}
