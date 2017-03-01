module.exports = (input)=> {
  var equation = input[0]
  console.log(` performing inverse operations on  ${JSON.stringify(equation)}`)
  var newEquation = equation
  var output = [newEquation, input[1]]
  return output
}
