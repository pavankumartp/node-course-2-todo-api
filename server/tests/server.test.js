const request = require('supertest');
const expect = require('expect');

var {app} = require('./../server');
var {User} = require('./../models/user');

var users = [
  {
    name: 'Pavan1',
    email: 'pavan.kumar@sap.com',
    age: 40,
    location: 'Bengaluru'
  },
  {
    name: 'Pavan2',
    email: 'pavan.kumar@sap.com',
    age: 40,
    location: 'Bengaluru'
  }
 ]

beforeEach((done)=>{
  console.log('user deleted')
  User.remove({}).then(()=>User.insertMany(users).then(()=>done()));
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

    User.find({name:'Pavan'}).then((users)=>{
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
      expect(users.length).toBe(2);
      console.log('successful verification');
      done();
    }).catch((e)=>done(e));
  })

})

})

describe('GET User data',()=>{
  it('should get all Users',(done)=>{
    request(app).get('/user').expect(200)
    .expect((res)=>{
      expect(res.body.users.length).toBe(2)
    }).end(done);
  })

})
