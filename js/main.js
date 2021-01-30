const getRandomInteger = function (num1, num2) {

  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    // Выход из функции при невалидном значении
    return
  }

  const minNumber = Math.ceil(Math.min(num1, num2));
  const maxNumber = Math.floor(Math.max(num1, num2));

  if (minNumber < 0 && maxNumber <0) {
    // Выход из функции при значении меньше 0
    return
  }

  if (maxNumber === minNumber) {
    return minNumber;
  }

  if (minNumber >= 0 && maxNumber >= 0 && maxNumber > minNumber) {
    return  Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
  }
}

const getRandomFloatNumber = function (num1, num2, range) {

  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    // Выход из функции при невалидном значении
    return
  }

  const minNumber = Math.min(num1, num2);
  const maxNumber = Math.max(num1, num2);

  if (minNumber < 0 && maxNumber <0) {
    // Выход из функции при значении меньше 0
    return
  }

  if (maxNumber === minNumber) {
    return minNumber;
  }

  if (minNumber >= 0 && maxNumber >= 0 && maxNumber > minNumber) {
    return ((Math.random() * (maxNumber - minNumber)) + minNumber).toFixed(range);
  }
}
