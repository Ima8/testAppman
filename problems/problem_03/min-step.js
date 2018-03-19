const minStep = input => {

  function IsPowerOfTwo(x)
  {
      return (x != 0) && ((x & (x - 1)) == 0);
  }

  let result = Math.log2(input)
  var newResult = Math.round(result);
  console.log("log : ",newResult)
  var pow = Math.pow(2,newResult)
  console.log("pow",pow)

var round = input

for (var i = 0 ; i <= round ; i++ ) {
  if(input-1 == IsPowerOfTwo(input)){
    input--
    console.log("input-- ",input)
  }else
  if (input+1 == IsPowerOfTwo(input)){
    input++
    console.log("input++ ",input)
  }else{
    input--
    console.log("input-- ",input)
  }

  if (isEven(input)) {
          input /= 2
          console.log("input/2 ",input)
  }
  if(input == 1 ){
    console.log(i+3)
    break;
  } 
}

};

function isEven(n) {
  return n % 2 == 0;
}

function isOdd(n) {
  return Math.abs(n % 2) == 1;
}

var input = 15;
minStep(input);
module.exports = { minStep };

// 11 10 5 4 2 1