const getRandomNumber = function (num1, num2) {

  if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
    return
  }

  let minNumber = Math.min(num1, num2);
  let maxNumber = Math.max(num1, num2);

  minNumber = Math.ceil(minNumber);
  maxNumber = Math.floor(maxNumber);

  minNumber = minNumber > 0 ? minNumber : 0;

  if (maxNumber === minNumber) {
    return minNumber;
  }

  if (minNumber >= 0 && maxNumber >= 0 && maxNumber > minNumber) {
    return  Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
  }
}

getRandomNumber(1, 4);

const getRandomFloatNumber = function (num1, num2, range) {

  if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
    return
  }

  let minNumber = Math.min(num1, num2);
  let maxNumber = Math.max(num1, num2);

  minNumber = minNumber > 0 ? minNumber : 0;

  if (maxNumber === minNumber) {
    return minNumber;
  }

  if (num1 >= 0 && num2 >= 0 && num2 > num1) {
    return ((Math.random() * (num2 - num1)) + num1).toFixed(range);
  }
}

getRandomFloatNumber(1.2222, 5.1111111, 4);
