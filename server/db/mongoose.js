mongoose = require('mongoose');

//Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI);

module.exports = {mongoose}
