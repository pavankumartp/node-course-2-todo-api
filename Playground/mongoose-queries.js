var {User} = require('./../server/models/user');
var {mongoose} = require('./../server/db/mongoose');

 var id = '594d3987dafa221914a436dd';



//
 User.findById(id).then(
   (doc)=>{if(!doc)return console.log('User not found')
            console.log('Result: ', doc)},
   (err)=>{debugger; console.log('error: ', doc)}).catch((e)=>console.log('error: ', e));
