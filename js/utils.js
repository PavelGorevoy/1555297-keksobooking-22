const getRandomInteger = function (num1, num2) {

  if (typeof num1 !== 'number' || typeof num2 !== 'number') {

    throw new Error('getRandomInteger - функция принимает только числа');
  }

  const minNumber = Math.ceil(Math.min(num1, num2));
  const maxNumber = Math.floor(Math.max(num1, num2));

  if (minNumber < 0 && maxNumber < 0) {

    throw new Error('getRandomInteger - функция принимает только положительные числа');
  }

  if (maxNumber === minNumber) {
    return minNumber;
  }

  if (minNumber >= 0 && maxNumber >= 0 && maxNumber > minNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
  }
}

const getRandomFloatNumber = function (num1, num2, range) {

  if (typeof num1 !== 'number' || typeof num2 !== 'number') {

    throw new Error('getRandomFloatNumber - функция принимает только числа');
  }

  const minNumber = Math.min(num1, num2);
  const maxNumber = Math.max(num1, num2);

  if (minNumber < 0 && maxNumber < 0) {

    throw new Error('getRandomFloatNumber - функция принимает только положительные числа');
  }

  if (maxNumber === minNumber) {
    return minNumber;
  }

  if (minNumber >= 0 && maxNumber >= 0 && maxNumber > minNumber) {
    return ((Math.random() * (maxNumber - minNumber)) + minNumber).toFixed(range);
  }
}

export {getRandomInteger, getRandomFloatNumber};
