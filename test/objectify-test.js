var chai = require('chai')
var should = chai.should()
var expect = chai.expect

var objectify = require('../src/objectify')



describe.only('solve', ()=> {

  it('a + 1 = 2', ()=> {
    expect(JSON.stringify(objectify(
      [ 'a + 1 = 2', 'a' ]
      )[0])
    ).to.equal(JSON.stringify(
        [['a',1],[2]]
      )
    )
  })

  it('a - 1 = 1', ()=> {
    expect(JSON.stringify(objectify(
      [ 'a - 1 = 1', 'a' ]
      )[0])
    ).to.equal(JSON.stringify(
        [['a',-1],[1]]
      )
    )
  })

  it('2 - a = 1', ()=> {
    expect(JSON.stringify(objectify(
      [ '2 - a = 1', 'a' ]
      )[0])
    ).to.equal(JSON.stringify(
        [[2,'-a'],[1]]
      )
    )
  })

  it('4/a = 2', ()=> {
    expect(JSON.stringify(objectify(
      [ '4/a = 2', 'a' ]
      )[0])
    ).to.equal(JSON.stringify(
        [['4/a'],[2]]
      )
    )
  })

  it('2a = 4', ()=> {
    expect(JSON.stringify(objectify(
      [ '2a = 4', 'a' ]
      )[0])
    ).to.equal(JSON.stringify(
        [['2a'],[4]]
      )
    )
  })

  it('(2a - 2)/2 = 1', ()=> {
    expect(JSON.stringify(objectify(
      [ '(2a - 2)/2 = 1', 'a' ]
      )[0])
    ).to.equal(JSON.stringify(
        [[['2a', -2],'/2'],[1]]
      )
    )
  })

})
