const request = require('supertest');
const expect = require('expect');

var {app} = require('./../server');
var {User} = require('./../models/user');

beforeEach((done)=>{
  console.log('user deleted')
  User.remove({}).then(()=>done());
})

describe('POST User',()=>{
  it('should create a new user', (done)=>{

  var u = {
    name: 'Pavan',
    email: 'pavan.kumar@sap.com',
    age: 40,
    location: 'Bengaluru'
  }

  request(app).post('/user').send(u).expect(200)
  .expect((res)=>{
    expect(JSON.stringify(res.body.name)).toBe(JSON.stringify(u.name))
  }).end((err, res)=>{
    if(err) return done(err);
//    done();

    User.find().then((users)=>{
      expect(users.length).toBe(1);
      expect(users[0].name).toBe('Pavan');
      console.log('successful verification');
      done();
    }).catch((e)=>done(e));
  })
  })

it('Should not create user', (done)=>{

  var u1 = {
    name: 'Pavan',
    email: 'pavan.kumar@sap.com',
    age: 'test',
    location: 'Bengaluru'
  }

  request(app).post('/user').send(u1).expect(400)
  .end((err, res)=>{
    if(err) return done(err);
//    done();

    User.find().then((users)=>{
      expect(users.length).toBe(0);
      console.log('successful verification');
      done();
    }).catch((e)=>done(e));
  })

})

})
