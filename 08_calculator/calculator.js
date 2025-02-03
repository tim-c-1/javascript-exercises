const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
  if (arr == ''){
    return 0;
  } else {
    return arr.reduce((acc, curr) => acc + curr);
  }
};

const multiply = function(arr) {
  return arr.reduce((acc, curr) => acc * curr);
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(num) {
  let output = 1;
	for (let i = 1; i <= num; i++){
    output = output * i;
  }
  return output;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
