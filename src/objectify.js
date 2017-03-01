module.exports = (input)=> {
  var equation = input[0]
  // console.log(`\n           splitting up terms for  ${JSON.stringify([equation])}`)
  var newEquation = equation
    // remove whitespace
    .replace(/\s/g, '')
    // split into two sides
    .split('=')
    // split up terms
    .map(side => side.match(/[+,-]?([a-z]|[0-9])+/g))

  var output = [newEquation, input[1]]
  return output
}
