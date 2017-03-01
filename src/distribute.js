module.exports = (input)=> {
  var equation = input[0]
  console.log(`   using distributive property on  ${JSON.stringify(equation)}`)
  var newEquation = equation
  var output = [newEquation, input[1]]
  return output
}
