var env = process.env.NODE_ENV || 'development';

if (env === 'development'){
  process.env.PORT = 2500;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/users';
}else if (env === 'test'){
  process.env.PORT = 2500;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/users_test';
}
