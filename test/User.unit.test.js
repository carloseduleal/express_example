var User = require('../model/User')
var chai = require('chai')

var assert = chai.assert;

describe('Tests for user', function() {
    it('Should return valid user', function() {
      var actualResult = new User('Kamila', '24', 'QA');
      actualResult.name.should.equal('Kamila');
      actualResult.age.should.equal('24');
      actualResult.job.should.equal('QA');
    });
    it('Should not allow create an user with null data', function() {
      var actualResult =  User(null, '24', 'QA');
      actualResult.error[0].should.equal('Name não pode ser nulo');

      actualResult = User('Kamila', null, 'QA');
      actualResult.error[0].should.equal('Age não pode ser nulo');

      actualResult =  User('Kamila', '24', null);
      actualResult.error[0].should.equal('Job não pode ser nulo');
    })
    it('Should not allow create an user when age is lower than 18', function(){
      var actualResult = User('Mariazinha','12','Estudante');
      actualResult.error[0].should.equal('Usuário deve possuir mais de 18 anos');
    })
    it('Should receive more than one error', function() {
      var actualResult = User(null, '13', null);
      actualResult.error.length.should.equal(3);
    });
});
