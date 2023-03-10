lowerCase = require('./function2')

const transform = (message, Transformer) => {
  return Transformer(message);
}
module.exports = transform