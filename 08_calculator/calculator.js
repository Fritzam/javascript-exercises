const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
      result += array[i];
  }

  return result;
};

const multiply = function(array) {
  let result = 1;
  for (let i = 0; i < array.length; i++) {
    result *= array[i];
  }
  return result;
};

const power = function(number, power) {
  let result = 1;
  if (power === 0) {
    return "1";
  }
  for (let i = 0; i < power; i++) {
    result *= number;
  }
  return result;
};

const factorial = function(number) {
  if (number === 0) {
    return 1;
  }
  let result = 1;
  for (let i = number; i > 0; i--) {
    result *= i;
  }
  return result;
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
