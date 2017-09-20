var should = require('chai').should(),
expect = require('chai').expect,
supertest = require('supertest'),
api = supertest('http://localhost:3000');

describe('Integration user endpoint tests', function() {
  it('Request user should return 200', function(done) {
    api.get('/users').expect(200, done);
  });
  it('Create an user should return 201', function(done) {
    api.post('/user')
    .send({
          name: 'Kamilaadsf',
          age: '2434',
          job: 'QAresre'
    })
    .expect(201, done);
  })
  it('Try to create an invalid user should return 400', function(done) {
    api.post('/user')
    .send({
          name: null,
          age: '12',
          job: null
    })
    .expect(400, done);
  })
});
