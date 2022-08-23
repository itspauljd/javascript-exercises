const add = function (input1, input2) {
  return input1 + input2
};

const subtract = function (input1, input2) {
  return input1 - input2
};

const sum = function (array) {
  let count = 0
  for (i = 0; i < array.length; i++) {
    count += array[i]
  }
  return count
};

const multiply = function (array) {
  let count = 1
  for (i = 0; i < array.length; i++) {
    count *= array[i]
  };
  return count
}

const power = function (input1, input2) {
  return input1 ** input2
};

const factorial = function (number) {
  if (number < 0)
    return -1;
  else if (number == 0)
    return 1;
  else {
    return (number * factorial(number - 1))
  };
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
