const convertToCelsius = function(temp) {
  celsiusTemp = ((temp - 32) * (5/9));
  celsiusTemp = +celsiusTemp.toFixed(1);
  console.log(celsiusTemp);
  return celsiusTemp;
};

const convertToFahrenheit = function(temp) {
  fahrenheitTemp = ((temp * (9/5)) + 32);
  fahrenheitTemp = +fahrenheitTemp.toFixed(1);
  console.log(fahrenheitTemp);
  return fahrenheitTemp;
};

convertToCelsius(-32);
convertToFahrenheit(0);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
