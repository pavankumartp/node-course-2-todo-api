process.env.SENDGRID_API_KEY =
'SG.ql8skLH9TPa3UNTl_WZjxQ.1gbMfg9DqClMRwhRx_1ZG6pETSTWZQNWlYlDeMophS8';



// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
var helper = require('sendgrid').mail;
var fromEmail = new helper.Email('gopalanu2001@gmail.com');
var toEmail = new helper.Email('pavan.kumar@sap.com');
var subject = 'Hi dear';
var content = new helper.Content('text/plain', 'You look handsome da');
var mail = new helper.Mail(fromEmail, subject, toEmail, content);

var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
var request = sg.emptyRequest({
  method: 'POST',
  path: '/v3/mail/send',
  body: mail.toJSON()
});

sg.API(request, function (error, response) {
  if (error) {
    console.log('Error response received');
  }
  console.log(response.statusCode);
  console.log(response.body);
  console.log(response.headers);
});
