const request = require('supertest');
const expect = require('expect');

var {app} = require('./app.js');

var text = {name:'Pavan'};

describe('this is for learning', ()=>{
    it('should respond with json',(done)=>{
      request(app)
      .get('/user')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .expect((res)=>{
       expect(JSON.stringify(res.body)).toBe(JSON.stringify(text))
     })
    .end((err, res)=>{
      if(err){return done(err) }
      done();
  })
  })

})
