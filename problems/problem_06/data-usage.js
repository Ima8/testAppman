const { readFileSync } = require('fs');
var unique = require('array-unique');
const logFilePath = __dirname + '/data-usage.log';
var u1 = 0 , u2 = 0  , u3 = 0  ; 
var myArr = [];
var countDay1 = [] , countDay2 = [] , countDay3 = [] ;
const raw = readFileSync(logFilePath, 'utf8');

String.prototype.insert = function (index, string) {
  if (index > 0)
    return this.substring(0, index) + string + this.substring(index, this.length);
  else
    return string + this;
};

const dataUsage = () => {
  for(var i = 0; i<=3469 ;i+=32){

    if(raw.slice(i+30,i+34)=='2018'){
      var result = raw.slice(i,i+29);
      result = result.insert(29, "  ")
      i-=2
      myArr.push(result)
    }else if(raw.slice(i+31,i+35)=='2018'){
      var result = raw.slice(i,i+30);
      result = result.insert(30, " ")
      i--
      myArr.push(result)
    }else{
      myArr.push(raw.slice(i,i+31))
    }
  }
  
  function splitString(stringToSplit, separator) {
    var arrayOfStrings = stringToSplit.split(separator);
    if(arrayOfStrings[1] == "user=user01"){
      var num = parseInt(arrayOfStrings[2].slice(5,9))
      var d1 = arrayOfStrings[0].slice(8,10)
      u1 += num
      countDay1.push(d1)
    }else if(arrayOfStrings[1] == "user=user02"){
      var num2 = parseInt(arrayOfStrings[2].slice(5,9))
      var d2 = arrayOfStrings[0].slice(8,10)
      u2 += num2
      countDay2.push(d2)
    }else if(arrayOfStrings[1] == "user=user03"){
      var num3 = parseInt(arrayOfStrings[2].slice(5,9))
      var d3 = arrayOfStrings[0].slice(8,10)
      u3 += num3
      countDay3.push(d3)
    }
    
  }
  
  var comma = ',';
  for(v in myArr){
    splitString(myArr[v], comma);
    
  }
  unique(countDay1)
  unique(countDay2)
  unique(countDay3)

  const sum1 = {username:'user01',total:u1,average:u1/=countDay1.length}
  const sum2 = {username:'user02',total:u2,average:u2/=countDay2.length}
  const sum3 = {username:'user03',total:u3,average:u3/=countDay3.length}

  var finalArr = [];
  finalArr.push(sum1,sum2,sum3)

  console.log(finalArr)
  
};

dataUsage();

module.exports = { dataUsage };
