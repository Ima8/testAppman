var fetch = require('node-fetch');

const cryptoDetails = async (symbols = []) => {
  for(i in symbols){
  fetch('https://coinbin.org/'+symbols[i])
  .then(res => res.json())
  .then(json => console.log(json));
  }
};

cryptoDetails(['eth','xrp'])

module.exports = { cryptoDetails };
