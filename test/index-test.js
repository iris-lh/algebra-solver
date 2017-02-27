var chai = require('chai')
var expect = chai.expect;
var should = chai.should()

var solve = require('../src/index')


describe('solve', ()=> {

  it('a + 1 = 2', ()=> {
    solve('a + 1 = 2', 'a').should.equal('a = 1')
  })

})
