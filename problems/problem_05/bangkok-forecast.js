var fetch = require('node-fetch');
const bangkokForecast = async () => {
  var arr = [];
  var a ;
  var max = 7;
  await fetch('http://api.openweathermap.org/data/2.5/forecast/daily?q=Bangkok&cnt=8&units=metric&appid=e5446373eef6128679c7fa8a1951d788')
    .then(res => res.json())
    .then(json => a=json);
      for(var i = 0 ; i<=6 ;i++){
          if(i==8){
            break;
          }
          var date = new Date();
          date.setDate(date.getDate() + i);
          var todayDate = date.toISOString().slice(0,10);
          var final = {date:todayDate,minTemp:a.list[i].temp.min,maxTemp:a.list[i].temp.max}
          arr.push(final)
      }
      console.log(arr)
  };

  
  
  bangkokForecast()
module.exports = { bangkokForecast };
