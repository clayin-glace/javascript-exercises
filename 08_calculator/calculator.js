const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(numbers) {
  let sum = 0;
  for (num of numbers) {
    sum = sum + num;
  };
  return sum;
};

const multiply = function(numbers) {
  let product = 1;
  for (num of numbers) {
    product = product * num;
  };
  return product;
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(x) {
  let factorial = 1;
  for (let i = x; i > 1; i--) {
    factorial = factorial * i
  };
  return factorial;
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
