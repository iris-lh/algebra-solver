var pipe = require('./helpers').pipe

var objectify = require('./objectify')
var distribute = require('./distribute')
var combineLikeTerms = require('./combine-like-terms')
var inverselyOperate = require('./inversely-operate')
var isolateVariable = require('./isolate-variable')



// THE STEPS TO SOLVE ALGEBRAIC EQUATIONS:
//
// 1.  Use distributive property
// 2.  Combine like terms
// 3.  Use inverse operation
// 4.  Isolate target variable



module.exports = (equation, target)=> {
  return pipe(
    [equation, target],
    objectify,
    distribute,
    combineLikeTerms,
    inverselyOperate,
    isolateVariable
  )
}
