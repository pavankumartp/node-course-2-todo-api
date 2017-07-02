var _ = require('lodash');

var user =
{
  _id: 'abc',
  name: 'Pavan1',
  email: 'pavan.kumar@sap.com',
  age: 40,
  location: 'Bengaluru'
};

var body = _.pick(user, ['name',  'location']);
console.log(body);
